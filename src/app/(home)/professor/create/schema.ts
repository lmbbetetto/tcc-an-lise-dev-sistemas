import { z } from 'zod';

export const schema = z.object({
    teacherName: z.string().min(2, "Nome completo deve ter pelo menos 2 caracteres").max(100, "Nome completo não pode exceder 100 caracteres"),
    phone: z.string().min(1, "Telefone é obrigatório"),
    email: z.string().email("Email inválido"),
    gender: z.string().min(1, "Gênero é obrigatório"),
    nascimento: z.string().min(1, "Data de nascimento é obrigatória"),
    rua: z.string().min(1, "Rua é obrigatória"),
    numero: z.string().min(1, "Número é obrigatório"),
    complemento: z.string().optional(),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    cidade: z.string().min(1, "Cidade é obrigatória"),
    uf: z.string().min(1, "Estado é obrigatório"),
    course: z.string().min(1, "Curso é obrigatório"),
    instituicao: z.string().min(1, "Instituição é obrigatória"),
    conclusion: z.string().min(1, "Ano de conclusão é obrigatório"),
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
    uf: '',
    gender: '',
    nivelFormacao: ''
};
