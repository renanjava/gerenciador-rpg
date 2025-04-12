import { Module } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoRepository } from './item-magico.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { PersonagemRepository } from 'src/personagem/personagem.repository';
import { PersonagemService } from 'src/personagem/personagem.service';

@Module({
  imports: [PrismaModule],
  controllers: [ItemMagicoController],
  providers: [
    ItemMagicoService,
    ItemMagicoRepository,
    PersonagemRepository,
    PersonagemService,
  
  ],
})
export class ItemMagicoModule {}
