import prisma from '@/lib/db';
import { DisciplinaPayload } from '@/service/disciplina';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        const data: DisciplinaPayload = await request.json();

        const updatedDisciplina = await prisma.disciplinas.update({
            where: { id: numericId },
            data: {
                nomeDisciplina: data.nomeDisciplina,
                professor: {
                    connect: { id: Number(data.idProfessor) },
                },
                cursos: {
                    connect: { id: Number(data.idCurso) },
                },
            },
        });

        return NextResponse.json(updatedDisciplina);
    } catch (error) {
        const errorMessage = (error as Error).message || 'Internal Server Error';
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}
