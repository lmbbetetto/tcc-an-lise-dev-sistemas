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
import { DisciplinaShow } from "@/service/disciplina";

export function TeacherRows() {
    const [disicplinas, setDisciplinas] = useState<DisciplinaShow[]>([]);

    async function fetchDisciplina() {
        const response = await fetch('/api/disciplina', {
            method: 'GET',
        })
        if (response.ok) {
            const data = await response.json()
            setDisciplinas(data);
        }
    }

    useEffect(() => {
        fetchDisciplina();
    }, [])

    const handleDeleteCurso = async (id: string) => {
        try {
            const response = await fetch('/api/disciplina', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            if (response.ok) {
                toast({
                    title: "Sucesso",
                    description: "Disciplina excluída com sucesso.",
                })
                fetchDisciplina()
            } else {
                toast({
                    title: "Erro",
                    description: "Disciplina excluída sem sucesso.",
                })
            }
        } catch (error) {
            toast({
                title: "Erro",
                description: "Disciplina excluída sem sucesso.",
            })
        }
    }

    return (
        <>
            {disicplinas.map((curso) => (
                <TableRow key={curso.id}>
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
                                                <DialogTitle className="text-2xl">{curso.nomeDisciplina}</DialogTitle>
                                            </DialogHeader>
                                            <DialogDescription>
                                                <div>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <p>{curso.professor.name}</p>
                                                        <p>{curso.cursos.nomeCurso}</p>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                            <DialogFooter>
                                                <Link href={routes.disciplina.edit(curso.id)}>
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
                                                <AlertDialogTitle>Excluir disciplina?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Esta ação não poderá ser desfeita. Excluindo esta disciplina, ela será removida permanentemente do sistema!
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteCurso(curso.id)}>Excluir</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </DialogTrigger>
                        </Dialog>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                        {curso.id}
                    </TableCell>
                    <TableCell className="font-medium">
                        {curso.nomeDisciplina}
                    </TableCell>
                    <TableCell className="font-medium">
                        {curso.professor.name}
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}

