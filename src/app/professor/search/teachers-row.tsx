import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

export function TeacherRows() {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex gap-2">
                            <Button variant="outline">
                                <Pencil className="h-3 w-3" />
                                <span className="sr-only">Detalhes do pedido</span>
                            </Button>
                            <Button variant="outline">
                                <Trash2 className="h-3 w-3" />
                                <span className="sr-only">Detalhes do pedido</span>
                            </Button>
                        </div>
                    </DialogTrigger>
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                18184s1ds714s
            </TableCell>
            <TableCell className="font-medium">
                Leonardo Betetto
            </TableCell>
        </TableRow>
    )
}