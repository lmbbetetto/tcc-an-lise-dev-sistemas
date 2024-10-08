'use server';
import { revalidatePath } from 'next/cache';

import { routes } from '@/utils/routes';
import { createCurso, Curso, CursoPayload, updateCurso } from '@/service/curso';

export async function createNewCurso(
    payload: CursoPayload,
): Promise<Curso> {
    const data: CursoPayload = {
        nomeCurso: payload.nomeCurso,
    };

    console.log(JSON.stringify(data))

    const response = await createCurso(data);

    console.log(response)
    revalidatePath(routes.professor.search, 'page');
    return response;
}

export async function editCurso(
    id: number,
    payload: CursoPayload,
): Promise<Curso> {
    const data: CursoPayload = {
        nomeCurso: payload.nomeCurso,
    };

    console.log(JSON.stringify(data))

    const response = await updateCurso(String(id), data);

    console.log(response)
    revalidatePath(routes.professor.search, 'page');
    return response;
}
