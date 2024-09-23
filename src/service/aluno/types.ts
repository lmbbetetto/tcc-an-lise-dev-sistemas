export interface Aluno {
    id: string;
    nome: string;
    nascimento: string;
    cpf: string;
    rg: string;
    telefone: string;
    phonePai?: string;
    phoneMae?: string;
    rendaFamilia: number;
    pai?: string;
    mae?: string;
    profMae?: string;
    profPai?: string;
    escola: string;
    periodo: string;
    serie: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
}

export interface AlunoPayload {
    studentName: string;
    nascimento: string;
    cpf: string;
    rg: string;
    phone: string;
    phonePai?: string;
    phoneMae?: string;
    rendaFamilia: number;
    pai?: string;
    mae?: string;
    profMae?: string;
    profPai?: string;
    escola: string;
    periodo: string;
    serie: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
}