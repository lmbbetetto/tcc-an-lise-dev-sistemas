import { Decimal } from '@prisma/client/runtime/library';
import prisma from "@/lib/db";


export async function POST(request: Request) {
    try {
        const {
            studentName,
            nascimento,
            cpf,
            rg,
            phone,
            phonePai,
            phoneMae,
            rendaFamilia,
            pai,
            mae,
            profMae,
            profPai,
            escola,
            periodo,
            serie,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            uf
        } = await request.json();

        const requiredFields = [
            studentName, nascimento, phone, rendaFamilia, escola, periodo, serie,
            rua, numero, bairro, cidade, uf
        ];

        if (requiredFields.some(field => !field)) {
            return new Response(
                JSON.stringify({ message: 'Todos os campos obrigatórios devem ser preenchidos.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const nascimentoPattern = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!nascimentoPattern.test(nascimento)) {
            return new Response(
                JSON.stringify({ message: 'Formato de data de nascimento inválido. Use DD/MM/YYYY.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const [day, month, year] = nascimento.split('/').map(Number);
        const birthDate = new Date(year, month - 1, day);

        const aluno = await prisma.aluno.create({
            data: {
                nome: studentName,
                nascimento: birthDate.toISOString(),
                cpf,
                rg,
                telefone: phone,
                phonePai,
                phoneMae,
                rendaFamilia: new Decimal(rendaFamilia),
                pai,
                mae,
                profMae,
                profPai,
                escola,
                periodo,
                serie,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                uf
            }
        });

        return new Response(
            JSON.stringify({ message: 'Aluno criado com sucesso!', aluno }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (err) {
        console.error('Erro ao criar aluno:', err);
        return new Response(
            JSON.stringify({
                message: "Erro ao criar aluno",
                error: err instanceof Error ? err.message : String(err),
                stack: err instanceof Error ? err.stack : undefined
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (id) {
        return getAlunoById(id);
    } else {
        return getAllAlunos();
    }
}

async function getAllAlunos() {
    try {
        const alunos = await prisma.aluno.findMany();
        return new Response(JSON.stringify(alunos), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar alunos:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar alunos", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

async function getAlunoById(id: string) {
    try {
        const aluno = await prisma.aluno.findUnique({
            where: { id: Number(id) }
        });

        if (!aluno) {
            return new Response(JSON.stringify({ message: "Aluno não encontrado" }), { status: 404 });
        }

        return new Response(JSON.stringify(aluno), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar aluno:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar aluno", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        const deletedAluno = await prisma.aluno.delete({
            where: {
                id: parseInt(id)
            }
        });

        console.log(deletedAluno);
        return new Response(JSON.stringify({ message: 'Aluno excluído com sucesso', deletedAluno }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Erro ao excluir aluno", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}