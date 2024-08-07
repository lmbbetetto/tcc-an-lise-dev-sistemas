import prisma from "@/lib/db";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (id) {
        return getProfessorById(id);
    } else {
        return getAllProfessors();
    }
}

async function getAllProfessors() {
    try {
        const professors = await prisma.professor.findMany();
        return new Response(JSON.stringify(professors), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar professores:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar professores", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

async function getProfessorById(id: string) {
    try {
        const professor = await prisma.professor.findUnique({
            where: { id: Number(id) }
        });

        if (!professor) {
            return new Response(JSON.stringify({ message: "Professor não encontrado" }), { status: 404 });
        }

        return new Response(JSON.stringify(professor), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error("Erro ao buscar professor:", err);
        return new Response(JSON.stringify({ message: "Erro ao buscar professor", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function POST(request: Request) {
    try {
        const {
            teacherName,
            phone,
            email,
            gender,
            nascimento,
            rua,
            numero,
            complemento,
            bairro,
            cidade,
            uf,
            course,
            instituicao,
            conclusion,
            nivelFormacao,
        } = await request.json();

        if (!teacherName || !phone || !email || !gender || !nascimento || !rua || !numero || !bairro || !cidade || !uf || !course || !instituicao || !conclusion || !nivelFormacao) {
            return new Response(JSON.stringify({ message: 'Todos os campos são obrigatórios.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dobPattern.test(nascimento)) {
            return new Response(JSON.stringify({ message: 'Data de nascimento inválida. Use o formato DD/MM/YYYY.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const professor = await prisma.professor.create({
            data: {
                name: teacherName,
                telefone: phone,
                email,
                genero: gender,
                nascimento,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado: uf,
                curso: course,
                instituicao,
                anoConclusao: conclusion,
                nivelFormacao,
            }
        });

        const { id } = professor;

        console.log('Professor Created:', professor);
        return new Response(JSON.stringify({ message: 'Funcionando', id, professor }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        console.error('Error creating professor:', err);
        return new Response(JSON.stringify({ message: "Error", err: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        const deletedProfessor = await prisma.professor.delete({
            where: {
                id: parseInt(id)
            }
        });

        console.log(deletedProfessor);
        return new Response(JSON.stringify({ message: 'Professor excluído com sucesso', deletedProfessor }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
        return new Response(JSON.stringify({ message: "Erro ao excluir professor", err }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}