export type TeacherPayload = {
    teacherName: string;
    phone: string;
    email: string;
    gender: string;
    nascimento: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    course: string;
    instituicao: string;
    conclusion: string;
    nivelFormacao: string;
}

export type TeacherShow = {
    id: number,
    name: string,
    telefone: string,
    email: string,
    genero: string,
    nascimento: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    curso: string,
    instituicao: string,
    anoConclusao: string,
    nivelFormacao: string
}

export type TeacherEdit = {
    name: string,
    telefone: string,
    email: string,
    genero: string,
    nascimento: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    curso: string,
    instituicao: string,
    anoConclusao: string,
    nivelFormacao: string
}
