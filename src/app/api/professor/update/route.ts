import prisma from '@/lib/db'

export async function PUT(request: Request) {
    try {
        const { id, teacherName, phone, rua, numero, complemento, bairro, cidade, uf, course, instituicao, conclusion } = await request.json();

        const updatedProfessor = await prisma.professor.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: teacherName,
                telefone: phone,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado: uf,
                curso: course,
                instituicao,
                anoConclusao: conclusion,
            }
        });

        console.log(updatedProfessor);
        return new Response(JSON.stringify({ message: 'Professor atualizado com sucesso', updatedProfessor }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Erro ao atualizar professor", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}