import prisma from "@/lib/db";


export async function POST(request: Request) {
    try {
        const { idProfessor, idCurso, nomeDisciplina } = await request.json();

        // Verifica campos obrigatórios
        if (!idProfessor || !idCurso || !nomeDisciplina) {
            return new Response(
                JSON.stringify({ message: 'Todos os campos obrigatórios devem ser preenchidos.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Cria disciplina no Prisma
        const disciplina = await prisma.disciplinas.create({
            data: {
                idProfessor,
                idCurso,
                nomeDisciplina,
            }
        });

        return new Response(
            JSON.stringify({ message: 'Disciplina criada com sucesso!', disciplina }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (err) {
        console.error('Erro ao criar disciplina:', err);
        return new Response(
            JSON.stringify({
                message: "Erro ao criar disciplina",
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
        return getDisciplinaById(id);
    } else {
        return getAllDisciplinas();
    }
}

async function getAllDisciplinas() {
    try {
        const disciplinas = await prisma.disciplinas.findMany({
            include: {
                cursos: true,
                professor: true,
            },
        });
        return new Response(JSON.stringify(disciplinas), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar disciplinas:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar disciplinas", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

async function getDisciplinaById(id: string) {
    try {
        const disciplina = await prisma.disciplinas.findUnique({
            where: { id: Number(id) },
            include: {
                cursos: true,
                professor: true,
            },
        });

        if (!disciplina) {
            return new Response(JSON.stringify({ message: "Disciplina não encontrada" }), { status: 404 });
        }

        return new Response(JSON.stringify(disciplina), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar disciplina:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar disciplina", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}


export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        const deletedCurso = await prisma.disciplinas.delete({
            where: {
                id: parseInt(id)
            }
        });

        console.log(deletedCurso);
        return new Response(JSON.stringify({ message: 'Disciplina excluída com sucesso', deletedCurso }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Erro ao excluir disciplina", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}