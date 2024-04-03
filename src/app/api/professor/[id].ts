import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/db";

export async function DELETE(request: NextApiRequest, response: NextApiResponse) {
    try {
        const { id } = request.query; // Obter o ID do parâmetro da URL
        const deletedProfessor = await prisma.professor.delete({
            where: {
                id: parseInt(id as string) // O parâmetro id pode ser uma string, então precisamos fazer a conversão
            }
        });
        console.log(deletedProfessor);
        response.status(200).json({ message: 'Professor excluído com sucesso', deletedProfessor });
    } catch (err) {
        response.status(500).json({ message: "Erro ao excluir professor", err });
    }
}