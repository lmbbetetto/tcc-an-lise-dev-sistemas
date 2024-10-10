'use server';
import { revalidatePath } from 'next/cache';

import { TeacherPayload, TeacherShow, updateProfessor } from '@/service/professor';
import { routes } from '@/utils/routes';
import { createTurma, Turma, TurmaPayload, updateTurma } from '@/service/turma';

export async function createNewTurma(
    payload: TurmaPayload,
): Promise<Turma> {
    const data: TurmaPayload = {
        idCurso: payload.idCurso,
        nomeTurma: payload.nomeTurma
    };

    console.log(JSON.stringify(data))

    const response = await createTurma(data);

    revalidatePath(routes.turma.search, 'page');
    return response;
}

export async function editTurma(
    id: number,
    payload: TurmaPayload,
): Promise<Turma> {
    const data: TurmaPayload = {
        idCurso: payload.idCurso,
        nomeTurma: payload.nomeTurma
    };

    console.log(JSON.stringify(data))

    const response = await updateTurma(String(id), data);

    console.log(response)
    revalidatePath(routes.professor.search, 'page');
    return response;
}
