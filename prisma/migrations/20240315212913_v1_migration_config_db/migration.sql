-- CreateTable
CREATE TABLE "Professor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "formacao" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplinas" (
    "id" SERIAL NOT NULL,
    "idProfessor" INTEGER NOT NULL,
    "nomeDisciplina" TEXT NOT NULL,

    CONSTRAINT "Disciplinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cursos" (
    "id" SERIAL NOT NULL,
    "nomeCurso" TEXT NOT NULL,

    CONSTRAINT "Cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "escola" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "serie" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "rendaFamilia" DECIMAL(9,2) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaltasDisciplinares" (
    "id" SERIAL NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataFalta" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FaltasDisciplinares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matricula" (
    "id" SERIAL NOT NULL,
    "idAluno" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "situacao" TEXT NOT NULL,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" SERIAL NOT NULL,
    "idMatricula" INTEGER NOT NULL,
    "idDisciplina" INTEGER NOT NULL,
    "idCurso" INTEGER NOT NULL,
    "nomeTurma" TEXT NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chamada" (
    "id" SERIAL NOT NULL,
    "idTurma" INTEGER NOT NULL,
    "idAtividadeSala" INTEGER NOT NULL,
    "presenca" TEXT NOT NULL,

    CONSTRAINT "Chamada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtividadeSala" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "AtividadeSala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtividadeExtraSala" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataAtividade" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AtividadeExtraSala_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Disciplinas" ADD CONSTRAINT "Disciplinas_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaltasDisciplinares" ADD CONSTRAINT "FaltasDisciplinares_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_idMatricula_fkey" FOREIGN KEY ("idMatricula") REFERENCES "Matricula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "Disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chamada" ADD CONSTRAINT "Chamada_idTurma_fkey" FOREIGN KEY ("idTurma") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chamada" ADD CONSTRAINT "Chamada_idAtividadeSala_fkey" FOREIGN KEY ("idAtividadeSala") REFERENCES "AtividadeSala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
