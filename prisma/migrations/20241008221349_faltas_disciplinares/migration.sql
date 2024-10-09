/*
  Warnings:

  - You are about to drop the column `idDisciplina` on the `Turma` table. All the data in the column will be lost.
  - You are about to drop the column `idMatricula` on the `Turma` table. All the data in the column will be lost.
  - Added the required column `idProfessor` to the `FaltasDisciplinares` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `FaltasDisciplinares` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chamada" DROP CONSTRAINT "Chamada_idTurma_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_idDisciplina_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_idMatricula_fkey";

-- AlterTable
ALTER TABLE "FaltasDisciplinares" ADD COLUMN     "idProfessor" INTEGER NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL,
ALTER COLUMN "dataFalta" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Turma" DROP COLUMN "idDisciplina",
DROP COLUMN "idMatricula";

-- AddForeignKey
ALTER TABLE "FaltasDisciplinares" ADD CONSTRAINT "FaltasDisciplinares_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
