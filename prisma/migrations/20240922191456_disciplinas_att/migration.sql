/*
  Warnings:

  - Added the required column `idCurso` to the `Disciplinas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Disciplinas" ADD COLUMN     "idCurso" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Disciplinas" ADD CONSTRAINT "Disciplinas_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
