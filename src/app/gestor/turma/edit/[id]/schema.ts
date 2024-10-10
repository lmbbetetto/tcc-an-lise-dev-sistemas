import { z } from 'zod';

export const schema = z.object({
    teacherName: z.string().min(2).max(100),
    phone: z.string(),
    email: z.string().email(),
    gender: z.string().optional(),
    nascimento: z.string(),
    rua: z.string(),
    numero: z.string(),
    complemento: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    estado: z.string(),
    course: z.string(),
    instituicao: z.string(),
    conclusion: z.string(),
    nivelFormacao: z.string().optional(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
    bairro: '',
    cidade: '',
    complemento: '',
    conclusion: '',
    course: '',
    email: '',
    instituicao: '',
    nascimento: '',
    numero: '',
    phone: '',
    rua: '',
    teacherName: '',
    estado: '',
    gender: '',
    nivelFormacao: ''
};
