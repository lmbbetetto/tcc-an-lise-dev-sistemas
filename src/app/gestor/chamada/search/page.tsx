'use client'
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
        <main className="mt-6">
            <Table>
                <TableCaption>Fim da lista de chamada.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">Ações</TableHead>
                        <TableHead className="w-[200px]">Turma</TableHead>
                        <TableHead className="w-[400px]">Data</TableHead>
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