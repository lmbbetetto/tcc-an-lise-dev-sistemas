'use client'
import Header from "@/components/Header"
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { StudentsRows } from "./students-row"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { routes } from "@/utils/routes"


export default function SearchTeacher() {
    return (
        <main className="mt-6">
            <div className="flex gap-4">
                <Button className="mb-3"><Link href={routes.aluno.new}>Novo aluno</Link></Button>
                <Button className="mb-3"><Link href={routes.faltasDisciplinares.new}>Nova falta disciplinar</Link></Button>
            </div>
            <Table>
                <TableCaption>Fim da lista de alunos.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Ações</TableHead>
                        <TableHead className="w-[200px]">Código</TableHead>
                        <TableHead className="w-[400px]">Nome</TableHead>
                        <TableHead>Telefone</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <StudentsRows />
                </TableBody>
            </Table>
        </main>
    )
}