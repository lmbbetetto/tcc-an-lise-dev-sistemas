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

export function StudentsRows() {
    return (
        <TableRow>
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
                                        <DialogTitle className="text-2xl">Leonardo Betetto</DialogTitle>
                                    </DialogHeader>
                                    <DialogDescription>
                                        <div>
                                            <span className="text-white">Dados pessoais</span>
                                            <div className="flex flex-col gap-1 ml-2">
                                                <p>18 99656-3354</p>
                                                <p>lmbbetetto@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-white">Endereço</span>
                                            <div className="flex flex-col gap-1 ml-2">
                                                <span>Monteiro Lobato, 136 - Fundos</span>
                                                <span>Barra Funda</span>
                                                <span>Paraguaçu Paulista - São Paulo</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-white">Formação</span>
                                            <div className="flex flex-col gap-1 ml-2">
                                                <span>Análise e Desenvolvimento de Sistemas</span>
                                                <span>FEMA</span>
                                                <span>Concluído em 2024</span>
                                            </div>
                                        </div>
                                    </DialogDescription>
                                    <DialogFooter>
                                            <Button variant={"outline"}>Editar</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline">
                                        <Trash2 className="h-3 w-3" />
                                        <span className="sr-only">Excluir aluno</span>
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Excluir aluno?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Esta ação não poderá ser desfeita. Excluindo este aluno, ele será removido permanentemente do sistema!
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                        <AlertDialogAction>Excluir</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                        </div>
                    </DialogTrigger>
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                18184s1ds714s
            </TableCell>
            <TableCell className="font-medium">
                Leonardo Manoel Batista Betetto
            </TableCell>
            <TableCell className="font-medium">
                18 99656-3354
            </TableCell>
        </TableRow>
    )
}