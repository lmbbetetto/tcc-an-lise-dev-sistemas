/*
  Warnings:

  - You are about to drop the column `idAtividadeSala` on the `Chamada` table. All the data in the column will be lost.
  - You are about to drop the column `presenca` on the `Chamada` table. All the data in the column will be lost.
  - Added the required column `idProfessor` to the `Chamada` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chamada" DROP CONSTRAINT "Chamada_idAtividadeSala_fkey";

-- AlterTable
ALTER TABLE "Chamada" DROP COLUMN "idAtividadeSala",
DROP COLUMN "presenca",
ADD COLUMN     "idProfessor" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Chamada" ADD CONSTRAINT "Chamada_idTurma_fkey" FOREIGN KEY ("idTurma") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chamada" ADD CONSTRAINT "Chamada_idProfessor_fkey" FOREIGN KEY ("idProfessor") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
