/*
  Warnings:

  - You are about to drop the column `atividadeSala` on the `Chamada` table. All the data in the column will be lost.
  - You are about to drop the column `presenca` on the `Chamada` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chamada" DROP COLUMN "atividadeSala",
DROP COLUMN "presenca";
