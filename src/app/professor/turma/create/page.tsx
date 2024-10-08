'use client'

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { TeacherShow } from "@/service/professor"
import { Check, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Toast, ToastProvider } from "@/components/ui/toast"
import { toast } from "@/components/ui/use-toast"

const mockClasses = [
    {
        id: 'turma1',
        name: 'Turma 1',
        students: [
            { id: 1, name: 'Leonardo' },
            { id: 2, name: 'Mariana' },
            { id: 3, name: 'Carlos' }
        ]
    },
    {
        id: 'turma2',
        name: 'Turma 2',
        students: [
            { id: 4, name: 'Ana' },
            { id: 5, name: 'João' },
            { id: 6, name: 'Sofia' }
        ]
    },
    {
        id: 'turma3',
        name: 'Turma 3',
        students: [
            { id: 7, name: 'Guilherme' },
            { id: 8, name: 'Isabela' },
            { id: 9, name: 'Fernanda' }
        ]
    }
];

export default function Chamada() {
    const [professors, setProfessors] = useState<TeacherShow[]>([]);
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const [students, setStudents] = useState<{ id: number, name: string }[]>([]);

    async function fetchProfessors() {
        const response = await fetch('/api/professor', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setProfessors(data);
        }
    }

    useEffect(() => {
        fetchProfessors();
    }, []);

    function handleClassChange(value: string) {
        setSelectedClass(value);
        const selectedClassData = mockClasses.find(turma => turma.id === value);
        setStudents(selectedClassData ? selectedClassData.students : []);
    }

    function handleSubmit() {
        toast({
            title: "Sucesso!",
            description: "Chamada registrada com sucesso!",
        });
        setSelectedClass(null);
        setStudents([]);
    }

    return (
        <ToastProvider>
            <ScrollArea className="h-[34rem] w-full pr-[250px]">
                <main className="space-y-8 p-2 pt-0">
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-3">
                            <Label>Turma</Label>
                            <Select onValueChange={handleClassChange}>
                                <SelectTrigger className="w-[20rem]">
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {mockClasses.map(turma => (
                                            <SelectItem key={turma.id} value={turma.id}>
                                                {turma.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Professor</Label>
                            <Select>
                                <SelectTrigger className="w-[20rem]">
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {professors.map((professor) => (
                                            <SelectItem key={professor.id} value={String(professor.id)}>
                                                {professor.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {selectedClass && (
                        <Table>
                            <TableCaption>{`Turma ${selectedClass}`}</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableCell className="w-[80%]">Nome do Aluno</TableCell>
                                    <TableCell>Presença | Falta</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {students.length > 0 ? (
                                    students.map(student => (
                                        <TableRow key={student.id}>
                                            <TableCell className="font-medium">{student.name}</TableCell>
                                            <TableCell className="font-medium">
                                                <ToggleGroup type="single">
                                                    <ToggleGroupItem value="presenca">
                                                        <Check className="h-4 w-4" />
                                                    </ToggleGroupItem>
                                                    <ToggleGroupItem value="falta">
                                                        <X className="h-4 w-4" />
                                                    </ToggleGroupItem>
                                                </ToggleGroup>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={2}>Nenhum aluno encontrado para esta turma.</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    )}

                    <Button type="button" onClick={handleSubmit}>Confirmar</Button>
                </main>
            </ScrollArea>
            <Toast />
        </ToastProvider>
    )
}
