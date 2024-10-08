import { z } from 'zod';

export const schema = z.object({
    descricao: z.string(),
    professor: z.string(),
    aluno: z.string(),
    data: z.string()
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
    descricao: '',
    professor: '',
    aluno: '',
    data: ''
};