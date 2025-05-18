import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { PersonagemRepository } from './personagem.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { ItemMagicoRepository } from 'src/item-magico/item-magico.repository';

@Module({
  imports: [PrismaModule],
  controllers: [PersonagemController],
  providers: [PersonagemService, PersonagemRepository, ItemMagicoRepository],
  exports: [PersonagemRepository, PersonagemService],
})
export class PersonagemModule {}
