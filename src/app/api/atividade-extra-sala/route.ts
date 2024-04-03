import prisma from "@/lib/db";

export async function POST(request: Request) {
    const req = await request.json();
    try {
        const { descricao, dataAtividade } = req

        const dataAtividadeDate = new Date(dataAtividade.split('/').reverse().join('-'));
        const extraSala = await prisma.atividadeExtraSala.create({
            data: {
                descricao: descricao,
                dataAtividade: dataAtividadeDate
            }
        });
        return new Response(JSON.stringify({ message: 'Funcionando', extraSala }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Error", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}