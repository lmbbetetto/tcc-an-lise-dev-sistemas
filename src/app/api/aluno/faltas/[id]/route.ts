import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }
        const { faltas }: { faltas?: number } = await request.json();

        if (faltas !== undefined && typeof faltas === 'number') {
            const updatedAluno = await prisma.aluno.update({
                where: { id: numericId },
                data: {
                    faltas: {
                        increment: faltas,
                    },
                },
            });

            return NextResponse.json(updatedAluno);
        } else {
            return NextResponse.json({ message: 'Faltas must be a number' }, { status: 400 });
        }
    } catch (error) {
        const errorMessage = (error as Error).message || 'Internal Server Error';
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}
