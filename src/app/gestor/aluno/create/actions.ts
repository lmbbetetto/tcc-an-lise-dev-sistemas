'use server';
import { revalidatePath } from 'next/cache';

import { routes } from '@/utils/routes';
import { Aluno, AlunoPayload, createAluno, updateAluno } from '@/service/aluno';

export async function createNewAluno(
    payload: AlunoPayload,
): Promise<Aluno> {
    const data: AlunoPayload = {
        bairro: payload.bairro,
        cidade: payload.cidade,
        cpf: payload.cpf ?? '',
        escola: payload.escola,
        nascimento: payload.nascimento,
        studentName: payload.studentName,
        numero: payload.numero,
        periodo: payload.periodo,
        rendaFamilia: Number(payload.rendaFamilia),
        rg: payload.rg ?? '',
        rua: payload.rua,
        serie: payload.serie,
        phone: payload.phone,
        uf: payload.uf,
        complemento: payload.complemento,
        mae: payload.mae,
        pai: payload.pai,
        phoneMae: payload.phoneMae,
        phonePai: payload.phonePai,
        profMae: payload.profMae,
        profPai: payload.profPai
    };

    console.log(JSON.stringify(data))

    const response = await createAluno(data);

    console.log(response)
    revalidatePath(routes.professor.search, 'page');
    return response;
}

export async function editAluno(
    id: number,
    payload: AlunoPayload,
): Promise<Aluno> {
    const data: AlunoPayload = {
        bairro: payload.bairro,
        cidade: payload.cidade,
        cpf: payload.cpf ?? '',
        escola: payload.escola,
        nascimento: payload.nascimento,
        studentName: payload.studentName,
        numero: payload.numero,
        periodo: payload.periodo,
        rendaFamilia: Number(payload.rendaFamilia),
        rg: payload.rg ?? '',
        rua: payload.rua,
        serie: payload.serie,
        phone: payload.phone,
        uf: payload.uf,
        complemento: payload.complemento,
        mae: payload.mae,
        pai: payload.pai,
        phoneMae: payload.phoneMae,
        phonePai: payload.phonePai,
        profMae: payload.profMae,
        profPai: payload.profPai
    };

    console.log(JSON.stringify(data))

    const response = await updateAluno(String(id), data);

    console.log(response)
    revalidatePath(routes.professor.search, 'page');
    return response;
}
