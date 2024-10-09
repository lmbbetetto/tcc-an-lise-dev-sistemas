import { Aluno } from "../aluno";
import { TeacherShow } from "../professor";

export interface FaltaDisciplinarPayload {
    idAluno: number;
    idProfessor: number;
    titulo: string;
    descricao: string;
    dataFalta: string;
}

export interface FaltaDisciplinar {
    id: number;
    idAluno: number;
    idProfessor: number;
    titulo: string;
    descricao: string;
    dataFalta: string;
    aluno: Aluno;
    professor: TeacherShow;
}