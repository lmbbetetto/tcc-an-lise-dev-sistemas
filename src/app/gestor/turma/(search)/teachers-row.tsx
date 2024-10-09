import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { EyeIcon, Trash2 } from "lucide-react";

import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger
} from "@/components/ui/alert-dialog";

import {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { routes } from "@/utils/routes";
import { Turma } from "@/service/turma";

export function TeacherRows() {
    const [turmas, setTurmas] = useState<Turma[]>([]);

    async function fetchTurmas() {
        const response = await fetch('/api/turma', {
            method: 'GET',
        })
        if (response.ok) {
            const data = await response.json()
            setTurmas(data);
        }
    }

    useEffect(() => {
        fetchTurmas();
    }, [])

    const handleDeleteFalta = async (id: string) => {
        try {
            const response = await fetch('/api/turma', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            if (response.ok) {
                toast({
                    title: "Sucesso",
                    description: "Turma excluída com sucesso.",
                })
                fetchTurmas()
            } else {
                toast({
                    title: "Erro",
                    description: "Turma excluída sem sucesso.",
                })
            }
        } catch (error) {
            toast({
                title: "Erro",
                description: "Turma excluída sem sucesso.",
            })
        }
    }

    return (
        <>
            {turmas.map((turma) => (
                <TableRow key={turma.id}>
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
                                                <DialogTitle className="text-2xl">{turma.nomeTurma}</DialogTitle>
                                            </DialogHeader>
                                            <DialogDescription>
                                                <div>
                                                    <span className="text-white">Curso</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <p>{turma.curso.nomeCurso}</p>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                            <DialogFooter>
                                                <Link href={routes.faltasDisciplinares.edit(String(turma.id))}>
                                                    <Button variant={"outline"}>Editar</Button>
                                                </Link>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="outline">
                                                <Trash2 className="h-3 w-3" />
                                                <span className="sr-only">Excluir falta disciplinar</span>
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Excluir turma?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Esta ação não poderá ser desfeita. Excluindo esta turma, ela será removida permanentemente do sistema!
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteFalta(String(turma.id))}>Excluir</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </DialogTrigger>
                        </Dialog>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                        {turma.id}
                    </TableCell>
                    <TableCell className="font-medium">
                        {turma.nomeTurma}
                    </TableCell>
                    <TableCell className="font-medium">
                        {turma.curso.nomeCurso}
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}

