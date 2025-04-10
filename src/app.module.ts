import { Module } from '@nestjs/common';
import { PersonagemModule } from './personagem/personagem.module';
import { ItemMagicoModule } from './item-magico/item-magico.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PersonagemModule, ItemMagicoModule, PrismaModule],
})
export class AppModule {}
