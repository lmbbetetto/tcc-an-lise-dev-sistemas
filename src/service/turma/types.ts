import { Curso } from "../curso";

export interface TurmaPayload {
    idCurso: number;
    nomeTurma: string;
}

export interface Turma {
    id: number;
    idCurso: number;
    nomeTurma: string;
    curso: Curso;
}