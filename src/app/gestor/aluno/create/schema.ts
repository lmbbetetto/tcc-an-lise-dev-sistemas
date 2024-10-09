import { z } from 'zod';

export const schema = z.object({
    studentName: z.string().min(2, { message: "Campo obrigatório" }),
    nascimento: z.string(),
    cpf: z.string().optional(),
    rg: z.string().optional(),
    phone: z.string(),
    phonePai: z.string().optional(),
    phoneMae: z.string().optional(),
    rendaFamilia: z.string(),
    pai: z.string().optional(),
    mae: z.string().optional(),
    profMae: z.string().optional(),
    profPai: z.string().optional(),

    escola: z.string(),
    periodo: z.string(),
    serie: z.string(),

    rua: z.string(),
    numero: z.string(),
    complemento: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string(),

    turma: z.string()
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
    bairro: '',
    cidade: '',
    complemento: '',
    escola: '',
    nascimento: '',
    numero: '',
    periodo: '',
    phone: '',
    rendaFamilia: '',
    rua: '',
    serie: '',
    studentName: '',
    uf: '',
    cpf: '',
    mae: '',
    pai: '',
    phoneMae: '',
    phonePai: '',
    profMae: '',
    profPai: '',
    rg: '',
    turma: ''
};
