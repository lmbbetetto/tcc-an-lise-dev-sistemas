'use server';
import { revalidatePath } from 'next/cache';

import { routes } from '@/utils/routes';
import { createDisciplina, DisciplinaPayload, DisciplinaShow, updateDisciplina } from '@/service/disciplina';

export async function createNewDisciplina(
    payload: DisciplinaPayload,
): Promise<DisciplinaShow> {
    const data: DisciplinaPayload = {
        idCurso: payload.idCurso,
        idProfessor: payload.idProfessor,
        nomeDisciplina: payload.nomeDisciplina
    };

    console.log(JSON.stringify(data))

    const response = await createDisciplina(data);

    console.log(response)
    revalidatePath(routes.professor.search, 'page');
    return response;
}

export async function editDisciplina(
    id: number,
    payload: DisciplinaPayload,
): Promise<DisciplinaShow> {
    const data: DisciplinaPayload = {
        idCurso: payload.idCurso,
        idProfessor: payload.idProfessor,
        nomeDisciplina: payload.nomeDisciplina
    };

    console.log(JSON.stringify(data))

    const response = await updateDisciplina(String(id), data);

    console.log(JSON.stringify(response))
    revalidatePath(routes.professor.search, 'page');
    return response;
}
