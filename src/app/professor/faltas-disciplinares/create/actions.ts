'use server';
import { revalidatePath } from 'next/cache';

import { TeacherPayload, TeacherShow, updateProfessor } from '@/service/professor';
import { routes } from '@/utils/routes';
import { createFaltaDisciplinar, FaltaDisciplinar, FaltaDisciplinarPayload } from '@/service/faltas-disicplinares';

export async function createNewFaltaDisciplinar(
    payload: FaltaDisciplinarPayload,
): Promise<FaltaDisciplinar> {
    const data: FaltaDisciplinarPayload = {
        dataFalta: payload.dataFalta,
        descricao: payload.descricao,
        idAluno: payload.idAluno,
        idProfessor: payload.idProfessor,
        titulo: payload.titulo
    };

    console.log(JSON.stringify(data))

    const response = await createFaltaDisciplinar(data);

    console.log(response)
    revalidatePath(routes.professor.search, 'page');
    return response;
}

export async function editProfessor(
    id: number,
    payload: TeacherPayload,
): Promise<TeacherShow> {
    const data: TeacherPayload = {
        conclusion: payload.conclusion,
        bairro: payload.bairro,
        cidade: payload.cidade,
        complemento: payload.complemento,
        course: payload.complemento,
        email: payload.email,
        estado: payload.estado,
        gender: payload.gender,
        instituicao: payload.instituicao,
        nascimento: payload.nascimento,
        nivelFormacao: payload.nivelFormacao,
        numero: payload.numero,
        phone: payload.phone,
        rua: payload.rua,
        teacherName: payload.teacherName
    };

    console.log(JSON.stringify(data))

    const response = await updateProfessor(String(id), data);

    console.log(response)
    revalidatePath(routes.professor.search, 'page');
    return response;
}
