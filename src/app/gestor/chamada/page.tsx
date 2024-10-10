'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { toast } from "@/components/ui/use-toast"
import { Aluno } from "@/service/aluno"
import { TeacherShow } from "@/service/professor"
import { Turma } from "@/service/turma"
import { Check, X } from "lucide-react"
import { useEffect, useState } from "react"

export default function Chamada() {
    const [professors, setProfessors] = useState<TeacherShow[]>([]);
    const [turmas, setTurmas] = useState<Turma[]>([]);
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const [selectedProfessor, setSelectedProfessor] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [students, setStudents] = useState<Aluno[]>([]);
    const [attendance, setAttendance] = useState<{ [studentId: number]: 'presenca' | 'falta' }>({});

    async function fetchProfessors() {
        const response = await fetch('/api/professor', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setProfessors(data);
        }
    }

    async function fetchTurmas() {
        const response = await fetch('/api/turma', {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setTurmas(data);
        }
    }

    async function fetchStudentsByClass(classId: string) {
        const response = await fetch(`/api/aluno?idTurma=${classId}`, {
            method: 'GET',
        });
        if (response.ok) {
            const data = await response.json();
            setStudents(data);
        } else {
            setStudents([]);
        }
    }

    const handleAttendanceChange = (studentId: number, value: 'presenca' | 'falta') => {
        setAttendance(prevState => ({
            ...prevState,
            [studentId]: value
        }));
    };

    const handleSubmit = async () => {
        const updatePromises = Object.entries(attendance).map(async ([studentId, value]) => {
            if (value === 'falta') {
                const response = await fetch(`/api/aluno/faltas/${studentId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        faltas: 1,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Erro ao atualizar faltas para o aluno ${studentId}`);
                }
            }
        });

        try {
            await Promise.all(updatePromises);

            const chamadaResponse = await fetch('/api/chamada', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idTurma: Number(selectedClass),
                    idProfessor: Number(selectedProfessor),
                    data: selectedDate,
                    presenca: attendance,
                }),
            });

            if (!chamadaResponse.ok) {
                const errorDetails = await chamadaResponse.text();
                console.error("Detalhes do erro da chamada:", errorDetails); // Log dos detalhes do erro
                throw new Error(`Erro ao criar a chamada: ${errorDetails}`);
            }

            const chamadaData = await chamadaResponse.json();

            toast({
                title: "Chamada realizada com sucesso!",
                description: "Registro de presença realizado com sucesso!",
            });
        } catch (error) {
            console.error("Erro ao realizar chamada:", error);
            toast({
                title: "Erro ao realizar chamada",
                description: "Erro ao atualizar faltas para o aluno",
                variant: "destructive",
            });
        }

        setSelectedClass(null);
        setSelectedProfessor(null);
        setSelectedDate('');
        setStudents([]);
        setAttendance({});
    };



    useEffect(() => {
        fetchProfessors();
        fetchTurmas();
    }, []);

    return (
        <ScrollArea className="h-[34rem] w-full pr-[250px]">
            <main className="space-y-8 p-2 pt-0">
                <div className="flex gap-6">
                    <div className="flex flex-col gap-3">
                        <Label>Turma</Label>
                        <Select onValueChange={(value) => {
                            setSelectedClass(value);
                            fetchStudentsByClass(value);
                        }}>
                            <SelectTrigger className="w-[15rem]">
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {turmas.map((turma) => (
                                        <SelectItem key={turma.id} value={String(turma.id)}>
                                            {turma.nomeTurma}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label>Professor</Label>
                        <Select onValueChange={(value) => setSelectedProfessor(value)}>
                            <SelectTrigger className="w-[15rem]">
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
                    <div className="flex flex-col gap-3">
                        <Label>Data</Label>
                        <Input value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                    </div>
                </div>

                {selectedClass && (
                    <Table>
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
                                        <TableCell className="font-medium">{student.nome}</TableCell>
                                        <TableCell className="font-medium">
                                            <ToggleGroup
                                                type="single"
                                                value={attendance[Number(student.id)] || ''}
                                                onValueChange={(value) => handleAttendanceChange(Number(student.id), value as 'presenca' | 'falta')}
                                            >
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
    )
}
