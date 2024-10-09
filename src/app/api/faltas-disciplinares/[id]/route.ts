import prisma from '@/lib/db';
import { CursoPayload } from '@/service/curso';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        const data: CursoPayload = await request.json();

        const updatedCurso = await prisma.cursos.update({
            where: { id: numericId },
            data: {
                nomeCurso: data.nomeCurso,
            },
        });

        return NextResponse.json(updatedCurso);
    } catch (error) {
        const errorMessage = (error as Error).message || 'Internal Server Error';
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}
