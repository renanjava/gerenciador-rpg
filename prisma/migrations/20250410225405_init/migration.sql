-- CreateEnum
CREATE TYPE "ClassesPersonagem" AS ENUM ('MAGO', 'ARQUEIRO', 'LADINO', 'BARDO', 'GUERREIRO');

-- CreateEnum
CREATE TYPE "TipoItemMagico" AS ENUM ('ARMA', 'ARMADURA', 'AMULETO');

-- CreateTable
CREATE TABLE "Personagem" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeAventureiro" TEXT NOT NULL,
    "classe" "ClassesPersonagem" NOT NULL,
    "level" INTEGER NOT NULL,
    "forca" INTEGER NOT NULL,
    "defesa" INTEGER NOT NULL,

    CONSTRAINT "Personagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemMagico" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipoItemMagico" "TipoItemMagico" NOT NULL,
    "forca" INTEGER NOT NULL,
    "defesa" INTEGER NOT NULL,
    "personagemId" TEXT NOT NULL,

    CONSTRAINT "ItemMagico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemMagico" ADD CONSTRAINT "ItemMagico_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
