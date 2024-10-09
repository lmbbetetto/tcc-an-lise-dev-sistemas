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
import { FaltaDisciplinar } from "@/service/faltas-disicplinares";

export function TeacherRows() {
    const [faltasDisciplinares, setFaltasDisciplinares] = useState<FaltaDisciplinar[]>([]);

    async function fetchFaltasDisciplinares() {
        const response = await fetch('/api/faltas-disciplinares', {
            method: 'GET',
        })
        if (response.ok) {
            const data = await response.json()
            setFaltasDisciplinares(data);
        }
    }

    useEffect(() => {
        fetchFaltasDisciplinares();
    }, [])

    const handleDeleteFalta = async (id: string) => {
        try {
            const response = await fetch('/api/faltas-disciplinares', {
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
                fetchFaltasDisciplinares()
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
            {faltasDisciplinares.map((faltas) => (
                <TableRow key={faltas.id}>
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
                                                <DialogTitle className="text-2xl">{faltas.aluno.nome}</DialogTitle>
                                            </DialogHeader>
                                            <DialogDescription>
                                                <div>
                                                    <span className="text-white">Dados</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <p>{faltas.dataFalta}</p>
                                                        <p>{faltas.professor.name}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="text-white">Descricao</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <span>{faltas.descricao}</span>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                            <DialogFooter>
                                                <Link href={routes.faltasDisciplinares.edit(String(faltas.id))}>
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
                                                <AlertDialogTitle>Excluir falta disciplinar?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Esta ação não poderá ser desfeita. Excluindo esta falta disciplinar, ela será removida permanentemente do sistema!
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteFalta(String(faltas.id))}>Excluir</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </DialogTrigger>
                        </Dialog>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                        {faltas.id}
                    </TableCell>
                    <TableCell className="font-medium">
                        {faltas.aluno.nome}
                    </TableCell>
                    <TableCell className="font-medium">
                        {faltas.descricao}
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}

