/*
  Warnings:

  - You are about to drop the column `idMatricula` on the `Turma` table. All the data in the column will be lost.
  - The `idDisciplina` column on the `Turma` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Chamada" DROP CONSTRAINT "Chamada_idTurma_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_idDisciplina_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_idMatricula_fkey";

-- AlterTable
ALTER TABLE "Turma" DROP COLUMN "idMatricula",
DROP COLUMN "idDisciplina",
ADD COLUMN     "idDisciplina" INTEGER[];

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "Disciplinas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
