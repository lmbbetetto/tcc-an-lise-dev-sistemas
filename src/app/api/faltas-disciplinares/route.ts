import prisma from "@/lib/db";


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { idAluno, idProfessor, titulo, descricao, dataFalta } = body;

        if (!idAluno || !idProfessor || !titulo || !descricao || !dataFalta) {
            return new Response(
                JSON.stringify({
                    message: "Todos os campos obrigatórios devem ser preenchidos.",
                }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        const alunoExistente = await prisma.aluno.findUnique({
            where: { id: idAluno },
        });

        if (!alunoExistente) {
            return new Response(
                JSON.stringify({ message: "Aluno não encontrado." }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }
        const professorExistente = await prisma.professor.findUnique({
            where: { id: idProfessor },
        });

        if (!professorExistente) {
            return new Response(
                JSON.stringify({ message: "Professor não encontrado." }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }
        const faltaDisciplinar = await prisma.faltasDisciplinares.create({
            data: {
                titulo,
                descricao,
                dataFalta,
                aluno: {
                    connect: { id: idAluno },
                },
                professor: {
                    connect: { id: idProfessor },
                },
            },
        });

        return new Response(
            JSON.stringify({ message: "Falta disciplinar criada com sucesso!", faltaDisciplinar }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        console.error("Erro ao criar falta disciplinar:", err);
        return new Response(
            JSON.stringify({
                message: "Erro ao criar falta disciplinar",
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
        return getFaltaDisciplinarById(id);
    } else {
        return getAllFaltaDisciplinar();
    }
}

async function getAllFaltaDisciplinar() {
    try {
        const faltasDisciplinares = await prisma.faltasDisciplinares.findMany({
            include: {
                aluno: true,
                professor: true,
            },
        });

        return new Response(JSON.stringify(faltasDisciplinares), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error("Erro ao buscar faltas disciplinares:", err);
        return new Response(
            JSON.stringify({ message: "Erro ao buscar faltas disciplinares", err }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

async function getFaltaDisciplinarById(id: string) {
    try {
        const faltaDisciplinar = await prisma.faltasDisciplinares.findUnique({
            where: { id: Number(id) },
            include: {
                aluno: true,
                professor: true,
            },
        });

        if (!faltaDisciplinar) {
            return new Response(
                JSON.stringify({ message: "Falta disciplinar não encontrada" }),
                { status: 404 }
            );
        }

        return new Response(JSON.stringify(faltaDisciplinar), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error("Erro ao buscar falta disciplinar:", err);
        return new Response(
            JSON.stringify({ message: "Erro ao buscar falta disciplinar", err }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        const deletedCurso = await prisma.faltasDisciplinares.delete({
            where: {
                id: parseInt(id)
            }
        });

        console.log(deletedCurso);
        return new Response(JSON.stringify({ message: 'Falta disciplinar excluída com sucesso', deletedCurso }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Erro ao excluir falta disciplinar", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}