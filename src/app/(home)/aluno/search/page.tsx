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


export default function SearchTeacher() {
    return (
        <>
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
        </>
    )
}