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
import { Professor } from "./type";
import { Curso } from "@/service/curso";

export function TeacherRows() {
    const [cursos, setCursos] = useState<Curso[]>([]);

    async function fetchProfessors() {
        const response = await fetch('/api/curso', {
            method: 'GET',
        })
        if (response.ok) {
            const data = await response.json()
            setCursos(data);
        }
    }

    useEffect(() => {
        fetchProfessors();
    }, [])

    const handleDeleteCurso = async (id: string) => {
        try {
            const response = await fetch('/api/curso', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            if (response.ok) {
                toast({
                    title: "Sucesso",
                    description: "Curso excluído com sucesso.",
                })
                fetchProfessors()
            } else {
                toast({
                    title: "Erro",
                    description: "Curso excluído sem sucesso.",
                })
            }
        } catch (error) {
            toast({
                title: "Erro",
                description: "Curso excluído sem sucesso.",
            })
        }
    }

    return (
        <>
            {cursos.map((curso) => (
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
                                                <DialogTitle className="text-2xl">{curso.nomeCurso}</DialogTitle>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <Link href={routes.curso.edit(curso.id)}>
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
                        {curso.nomeCurso}
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}

