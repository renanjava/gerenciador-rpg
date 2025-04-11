import { Module } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoRepository } from './item-magico.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PersonagemRepository } from 'src/personagem/personagem.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ItemMagicoController],
  providers: [ItemMagicoService, ItemMagicoRepository, PersonagemRepository],
})
export class ItemMagicoModule {}
