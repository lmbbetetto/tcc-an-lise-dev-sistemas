import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { EyeIcon, Pencil, Trash2 } from "lucide-react";

import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from "@/components/ui/alert-dialog";

import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";

interface Professor {
    id: number;
    name: string;
    telefone: string;
    email: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    curso: string,
    instituicao: string,
}

export function TeacherRows() {
    const [professors, setProfessors] = useState<Professor[]>([]);

    async function fetchProfessors() {
        const response = await fetch('/api/professor', {
            method: 'GET',
        })
        if (response.ok) {
            const data = await response.json()
            setProfessors(data);
        }
    }

    useEffect(() => {
        fetchProfessors();
    }, [])

    const handleDeleteProfessor = async (id: number) => {
        try {
            const response = await fetch('/api/professor', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            if (response.ok) {
                toast({
                    title: "Sucesso",
                    description: "Professor excluído com sucesso.",
                })
                fetchProfessors()
            } else {
                toast({
                    title: "Erro",
                    description: "Professor excluído sem sucesso.",
                })
            }
        } catch (error) {
            toast({
                title: "Erro",
                description: "Professor excluído sem sucesso.",
            })
        }
    }

    return (
        <>
            {professors.map((professor) => (
                <TableRow key={professor.id}>
                    <TableCell>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="flex gap-2">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline">
                                                <EyeIcon className="h-3 w-3" />
                                                <span className="sr-only">Visualizar professor</span>
                                            </Button></DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>{professor.name}</DialogTitle>
                                            </DialogHeader>
                                            <DialogDescription>
                                                <div className="flex flex-col gap-1">
                                                    <span>{professor.telefone}</span>
                                                    <span>{professor.email}</span>
                                                </div>
                                                <div className="flex flex-col gap-1 mt-4">
                                                    <span>{professor.rua}, {professor.numero} - {professor.complemento}</span>
                                                    <span>{professor.bairro}</span>
                                                    <span>{professor.cidade} - {professor.estado}</span>
                                                </div>
                                                <div className="flex flex-col gap-1 mt-4">
                                                    <span>{professor.curso}</span>
                                                    <span>{professor.instituicao}</span>
                                                </div>
                                            </DialogDescription>
                                            <DialogFooter>
                                                <Link href={`/professor/edit/${professor.id}`}>
                                                    <Button variant={"outline"}>Editar</Button>
                                                </Link>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="outline">
                                                <Trash2 className="h-3 w-3" />
                                                <span className="sr-only">Excluir professor</span>
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Excluir professor?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Esta ação não poderá ser desfeita. Excluindo este professor, ele será removido permanentemente do sistema!
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteProfessor(professor.id)}>Excluir</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </DialogTrigger>
                        </Dialog>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                        {professor.id}
                    </TableCell>
                    <TableCell className="font-medium">
                        {professor.name}
                    </TableCell>
                    <TableCell className="font-medium">
                        {professor.telefone}
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}

