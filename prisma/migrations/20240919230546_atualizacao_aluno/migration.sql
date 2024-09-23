/*
  Warnings:

  - Added the required column `bairro` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mae` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pai` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneMae` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phonePai` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profMae` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profPai` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "complemento" TEXT NOT NULL,
ADD COLUMN     "mae" TEXT NOT NULL,
ADD COLUMN     "numero" TEXT NOT NULL,
ADD COLUMN     "pai" TEXT NOT NULL,
ADD COLUMN     "phoneMae" TEXT NOT NULL,
ADD COLUMN     "phonePai" TEXT NOT NULL,
ADD COLUMN     "profMae" TEXT NOT NULL,
ADD COLUMN     "profPai" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL,
ADD COLUMN     "uf" TEXT NOT NULL;
