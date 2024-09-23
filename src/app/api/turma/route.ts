import prisma from "@/lib/db";


export async function POST(request: Request) {
    try {
        const {
            nomeCurso
        } = await request.json();

        const requiredFields = [
            nomeCurso
        ];

        if (requiredFields.some(field => !field)) {
            return new Response(
                JSON.stringify({ message: 'Todos os campos obrigatórios devem ser preenchidos.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const aluno = await prisma.cursos.create({
            data: {
                nomeCurso
            }
        });

        return new Response(
            JSON.stringify({ message: 'Curso criado com sucesso!', aluno }),
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
        return getCursoById(id);
    } else {
        return getAllCursos();
    }
}

async function getAllCursos() {
    try {
        const cursos = await prisma.cursos.findMany();
        return new Response(JSON.stringify(cursos), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar cursos", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

async function getCursoById(id: string) {
    try {
        const curso = await prisma.cursos.findUnique({
            where: { id: Number(id) }
        });

        if (!curso) {
            return new Response(JSON.stringify({ message: "Curso não encontrado" }), { status: 404 });
        }

        return new Response(JSON.stringify(curso), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar aluno:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar aluno", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        const deletedCurso = await prisma.cursos.delete({
            where: {
                id: parseInt(id)
            }
        });

        console.log(deletedCurso);
        return new Response(JSON.stringify({ message: 'Curso excluído com sucesso', deletedCurso }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Erro ao excluir curso", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}