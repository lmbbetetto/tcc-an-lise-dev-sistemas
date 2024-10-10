import { TableCell, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Aluno } from "../../aluno/(search)/types";

export function TeacherRows() {
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

    return (
        <>
            {alunos.map((aluno) => (
                <TableRow key={aluno.id}>
                    <TableCell className="font-mono text-xs font-medium">
                        {aluno.id}
                    </TableCell>
                    <TableCell className="font-medium">
                        {aluno.nome}
                    </TableCell>
                    <TableCell className="font-medium">
                        {aluno.faltas}
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}