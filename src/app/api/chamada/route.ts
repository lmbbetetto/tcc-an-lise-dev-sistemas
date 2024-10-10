import prisma from "@/lib/db";

export async function POST(request: Request) {
    try {
        const { idTurma, idProfessor, data } = await request.json();

        const requiredFields = [idTurma, idProfessor, data];

        if (requiredFields.some(field => field === undefined)) {
            return new Response(
                JSON.stringify({ message: 'Todos os campos obrigatórios devem ser preenchidos.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const chamada = await prisma.chamada.create({
            data: {
                idTurma,
                idProfessor,
                data
            }
        });

        return new Response(
            JSON.stringify({ message: 'Chamada criada com sucesso!', chamada }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (err) {
        console.error('Erro ao criar chamada:', err);
        return new Response(
            JSON.stringify({
                message: "Erro ao criar chamada",
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
        return getChamadaById(id);
    } else {
        return getAllChamadas();
    }
}

async function getAllChamadas() {
    try {
        const chamadas = await prisma.chamada.findMany({
            include: {
                turma: true,
                professor: true,
            }
        });
        return new Response(JSON.stringify(chamadas), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar chamadas:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar chamadas", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

async function getChamadaById(id: string) {
    try {
        const chamada = await prisma.chamada.findUnique({
            where: { id: Number(id) },
            include: {
                turma: true,
                professor: true,
            }
        });

        if (!chamada) {
            return new Response(JSON.stringify({ message: "Chamada não encontrada" }), { status: 404 });
        }

        return new Response(JSON.stringify(chamada), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar chamada:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar chamada", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        const deletedChamada = await prisma.chamada.delete({
            where: {
                id: parseInt(id)
            }
        });

        return new Response(JSON.stringify({ message: 'Chamada excluída com sucesso', deletedChamada }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao excluir chamada:", err);
        return new Response(JSON.stringify({ message: "Erro ao excluir chamada", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
