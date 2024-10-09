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

export function StudentsRows() {
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    async function fetchAlunos() {
        const response = await fetch('/api/aluno', {
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
            const response = await fetch('/api/aluno', {
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
                fetchAlunos()
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
                                                <DialogTitle className="text-2xl">{aluno.nome}</DialogTitle>
                                            </DialogHeader>
                                            <DialogDescription>
                                                <div className="mb-">
                                                    <span className="text-white">Turma</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <p>{aluno.turma.nomeTurma}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="text-white">Dados pessoais</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <p>{aluno.telefone}</p>
                                                        <p>{aluno.rg} | {aluno.cpf}</p>
                                                        <p>Renda Familiar: {aluno.rendaFamilia}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="text-white">Pai</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <p>{aluno.pai}</p>
                                                        <p>{aluno.phonePai}</p>
                                                        <p>{aluno.profPai}</p>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="text-white">Mãe</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <p>{aluno.mae}</p>
                                                        <p>{aluno.phoneMae}</p>
                                                        <p>{aluno.profMae}</p>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="text-white">Escola</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <span>{aluno.escola}</span>
                                                        <span>{aluno.serie} - {aluno.periodo}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <span className="text-white">Endereço</span>
                                                    <div className="flex flex-col gap-1 ml-2">
                                                        <span>{aluno.rua}, {aluno.numero} - {aluno.complemento}</span>
                                                        <span>{aluno.bairro}</span>
                                                        <span>{aluno.cidade} - {aluno.uf}</span>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                            <DialogFooter>
                                                <Link href={routes.aluno.edit(aluno.id)}>
                                                    <Button variant={"outline"}>Editar</Button>
                                                </Link>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="outline">
                                                <Trash2 className="h-3.5 w-3.5" />
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
                                                <AlertDialogAction onClick={() => handleDeleteAluno(aluno.id)}>Excluir</AlertDialogAction>
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
                        {aluno.nome}
                    </TableCell>
                    <TableCell className="font-medium">
                        {aluno.telefone}
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}