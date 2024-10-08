'use server';
import { revalidatePath } from 'next/cache';

import { createProfessor, TeacherPayload, TeacherShow, updateProfessor } from '@/service/professor';
import { routes } from '@/utils/routes';

export async function createNewProfessor(
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

    const response = await createProfessor(data);

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
