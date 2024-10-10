import prisma from '@/lib/db';
import { TurmaPayload } from '@/service/turma';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        const data: TurmaPayload = await request.json();

        const updatedTurma = await prisma.turma.update({
            where: { id: numericId },
            data: {
                nomeTurma: data.nomeTurma,
                idCurso: data.idCurso,
            },
        });

        return NextResponse.json(updatedTurma);
    } catch (error) {
        const errorMessage = (error as Error).message || 'Internal Server Error';
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}