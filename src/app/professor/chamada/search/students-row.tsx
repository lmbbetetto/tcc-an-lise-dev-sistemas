import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { EyeIcon, Pencil, Trash2 } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { FaltasDisciplinares } from "./components/faltas-disciplinares/faltas-disciplinares";
import { useEffect, useState } from "react";
import { Aluno } from "./types";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { routes } from "@/utils/routes";
import { TeacherShow } from "@/service/professor";
import { Turma } from "@/service/turma";

interface Chamada {
    id: number,
    idTurma: number,
    idProfessor: number,
    data: string,
    turma: Turma
    professor: TeacherShow
}

export function StudentsRows() {
    const [alunos, setAlunos] = useState<Chamada[]>([]);

    async function fetchAlunos() {
        const response = await fetch('/api/chamada', {
            method: 'GET',
        })
        if (response.ok) {
            const data = await response.json()
            setAlunos(data);
        }
    }

    useEffect(() => {
        fetchAlunos();
    }, [])

    const handleDeleteAluno = async (id: string) => {
        try {
            const response = await fetch('/api/chamada', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            if (response.ok) {
                toast({
                    title: "Sucesso",
                    description: "Chamada excluída com sucesso.",
                })
                fetchAlunos()
            } else {
                toast({
                    title: "Erro",
                    description: "Chamada excluída sem sucesso.",
                })
            }
        } catch (error) {
            toast({
                title: "Erro",
                description: "Chamada excluída sem sucesso.",
            })
        }
    }

    return (
        <>
            {alunos.map((aluno) => (
                <TableRow key={aluno.id}>
                    <TableCell>
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="flex gap-2">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline">
                                                <EyeIcon className="h-3.5 w-3.5" />
                                                <span className="sr-only">Visualizar Aluno</span>
                                            </Button></DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl">{aluno.turma.nomeTurma}</DialogTitle>
                                            </DialogHeader>
                                            <DialogDescription>
                                                <div className="mb-">
                                                    <span className="text-white">Professor</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <p>{aluno.professor.name}</p>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="outline">
                                                <Trash2 className="h-3.5 w-3.5" />
                                                <span className="sr-only">Excluir chamada</span>
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Excluir chamada?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Esta ação não poderá ser desfeita. Excluindo esta chamada, ele será removida permanentemente do sistema!
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteAluno(String(aluno.id))}>Excluir</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </DialogTrigger>
                        </Dialog>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                        {aluno.id}
                    </TableCell>
                    <TableCell className="font-medium">
                        {aluno.turma.nomeTurma}
                    </TableCell>
                    <TableCell className="font-medium">
                        {aluno.data}
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}