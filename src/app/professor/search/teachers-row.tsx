import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

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


export function TeacherRows() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex gap-2">
                            <Button variant="outline">
                                <Pencil className="h-3 w-3" />
                                <span className="sr-only">Editar professor</span>
                            </Button>

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