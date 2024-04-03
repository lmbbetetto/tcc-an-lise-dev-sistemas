/*
  Warnings:

  - You are about to drop the column `cpf` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `formacao` on the `Professor` table. All the data in the column will be lost.
  - Added the required column `anoConclusao` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bairro` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `curso` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instituicao` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivelFormacao` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "cpf",
DROP COLUMN "formacao",
ADD COLUMN     "anoConclusao" TEXT NOT NULL,
ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "complemento" TEXT NOT NULL,
ADD COLUMN     "curso" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL,
ADD COLUMN     "instituicao" TEXT NOT NULL,
ADD COLUMN     "nivelFormacao" TEXT NOT NULL,
ADD COLUMN     "numero" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL;
