'use client'
import Header from "@/components/Header"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TeacherRows } from "./teachers-row"


export default function SearchTeacher() {
    return (
        <>
            <Header />
            <Table>
                <TableCaption>Fim da lista de Faltas disciplinares.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">Ações</TableHead>
                        <TableHead className="w-[50px]">Codigo</TableHead>
                        <TableHead className="w-[200px]">Aluno</TableHead>
                        <TableHead className="w-[400px]">Descrição</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TeacherRows />
                </TableBody>
            </Table>
        </>
    )
}