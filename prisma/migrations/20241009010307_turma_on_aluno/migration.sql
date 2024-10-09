/*
  Warnings:

  - Added the required column `idTurma` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "idTurma" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_idTurma_fkey" FOREIGN KEY ("idTurma") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
