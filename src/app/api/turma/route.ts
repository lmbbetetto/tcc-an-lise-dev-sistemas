import prisma from "@/lib/db";


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { idCurso, nomeTurma } = body;

        if (!idCurso || !nomeTurma) {
            return new Response(
                JSON.stringify({
                    message: "Todos os campos obrigatórios devem ser preenchidos.",
                }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        const cursoExistente = await prisma.cursos.findUnique({
            where: { id: idCurso },
        });

        if (!cursoExistente) {
            return new Response(
                JSON.stringify({ message: "Curso não encontrado." }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }
        const novaTurma = await prisma.turma.create({
            data: {
                nomeTurma,
                curso: {
                    connect: { id: idCurso },
                },
            },
        });

        return new Response(
            JSON.stringify({ message: "Turma criada com sucesso!", novaTurma }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        console.error("Erro ao criar turma:", err);
        return new Response(
            JSON.stringify({
                message: "Erro ao criar turma",
                error: err instanceof Error ? err.message : String(err),
                stack: err instanceof Error ? err.stack : undefined,
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (id) {
        return getTurmaById(id);
    } else {
        return getAllTurmas();
    }
}

async function getAllTurmas() {
    try {
        const turmas = await prisma.turma.findMany({
            include: {
                curso: true,
            },
        });

        return new Response(JSON.stringify(turmas), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error("Erro ao buscar turmas:", err);
        return new Response(
            JSON.stringify({ message: "Erro ao buscar turmas", err }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

async function getTurmaById(id: string) {
    try {
        const turma = await prisma.turma.findUnique({
            where: { id: Number(id) },
            include: {
                curso: true,
            },
        });

        if (!turma) {
            return new Response(
                JSON.stringify({ message: "Turma não encontrada" }),
                { status: 404 }
            );
        }

        return new Response(JSON.stringify(turma), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error("Erro ao buscar turma:", err);
        return new Response(
            JSON.stringify({ message: "Erro ao buscar turma", err }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}


export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        const deletedTurma = await prisma.turma.delete({
            where: {
                id: parseInt(id)
            }
        });

        console.log(deletedTurma);
        return new Response(JSON.stringify({ message: 'Turma excluída com sucesso', deletedTurma }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao excluir turma:", err);
        return new Response(JSON.stringify({ message: "Erro ao excluir turma", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}