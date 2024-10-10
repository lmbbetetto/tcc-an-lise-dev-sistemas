/*
  Warnings:

  - Added the required column `data` to the `Chamada` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chamada" ADD COLUMN     "data" TEXT NOT NULL;
