import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

interface StudentPayload {
    studentName: string;
    nascimento: string;
    cpf: string;
    rg: string;
    phone: string;
    phonePai?: string;
    phoneMae?: string;
    rendaFamilia: number;
    pai?: string;
    mae?: string;
    profMae?: string;
    profPai?: string;
    escola: string;
    periodo: string;
    serie: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const numericId = Number(id);
        if (isNaN(numericId)) {
            return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
        }

        const data: StudentPayload = await request.json();

        const updatedAluno = await prisma.aluno.update({
            where: { id: numericId },
            data: {
                nome: data.studentName,
                nascimento: data.nascimento,
                cpf: data.cpf,
                rg: data.rg,
                telefone: data.phone,
                phonePai: data.phonePai,
                phoneMae: data.phoneMae,
                rendaFamilia: data.rendaFamilia,
                pai: data.pai,
                mae: data.mae,
                profMae: data.profMae,
                profPai: data.profPai,
                escola: data.escola,
                periodo: data.periodo,
                serie: data.serie,
                rua: data.rua,
                numero: data.numero,
                complemento: data.complemento,
                bairro: data.bairro,
                cidade: data.cidade,
                uf: data.uf
            },
        });

        return NextResponse.json(updatedAluno);
    } catch (error) {
        const errorMessage = (error as Error).message || 'Internal Server Error';
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}
