import prisma from '@/lib/db';
import { TeacherPayload } from '@/service/professor';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        const data: TeacherPayload = await request.json();

        const updatedProfessor = await prisma.professor.update({
            where: { id: numericId },
            data: {
                name: data.teacherName,
                telefone: data.phone,
                email: data.email,
                genero: data.gender,
                nascimento: data.nascimento,
                rua: data.rua,
                numero: data.numero,
                complemento: data.complemento,
                bairro: data.bairro,
                cidade: data.cidade,
                estado: data.estado,
                curso: data.course,
                instituicao: data.instituicao,
                anoConclusao: data.conclusion,
                nivelFormacao: data.nivelFormacao
            },
        });

        return NextResponse.json(updatedProfessor);
    } catch (error) {
        const errorMessage = (error as Error).message || 'Internal Server Error';
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}