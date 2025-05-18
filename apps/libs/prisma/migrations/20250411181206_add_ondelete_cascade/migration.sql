-- DropForeignKey
ALTER TABLE "ItemMagico" DROP CONSTRAINT "ItemMagico_personagemId_fkey";

-- AddForeignKey
ALTER TABLE "ItemMagico" ADD CONSTRAINT "ItemMagico_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "Personagem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
