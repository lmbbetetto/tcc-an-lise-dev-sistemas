import prisma from "@/lib/db";


export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validação dos dados da requisição
        const { nomeTurma, idCurso, idProfessor } = schema.parse(body);

        // Verificação se todos os campos obrigatórios foram enviados
        if (!nomeTurma || !idCurso || !idProfessor) {
            return new Response(
                JSON.stringify({
                    message: "Todos os campos obrigatórios devem ser preenchidos.",
                }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Verificar se o curso existe
        const cursoExistente = await prisma.curso.findUnique({
            where: { id: idCurso },
        });

        if (!cursoExistente) {
            return new Response(
                JSON.stringify({ message: "Curso não encontrado." }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        // Verificar se o professor existe
        const professorExistente = await prisma.professor.findUnique({
            where: { id: idProfessor },
        });

        if (!professorExistente) {
            return new Response(
                JSON.stringify({ message: "Professor não encontrado." }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        // Criar a turma associando ao curso e ao professor
        const turma = await prisma.turma.create({
            data: {
                nomeTurma,
                curso: {
                    connect: { id: idCurso },
                },
                professor: {
                    connect: { id: idProfessor },
                },
            },
        });

        return new Response(
            JSON.stringify({ message: "Turma criada com sucesso!", turma }),
            { status: 200, headers: { "Content-Type": "application/json" } }
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