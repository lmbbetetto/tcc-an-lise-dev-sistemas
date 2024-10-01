import { Curso } from "../curso";
import { TeacherShow } from "../professor";

export interface Disciplina {
    id: string;
    nomeCurso: string;
}

export interface DisciplinaPayload {
    idCurso: number;
    idProfessor: number;
    nomeDisciplina: string;
}

export interface DisciplinaShow {
    id: string;
    nomeCurso: string;
    idProfessor: number,
    professor: TeacherShow;
	nomeDisciplina: string;
	idCurso: number;
	cursos: Curso;
}