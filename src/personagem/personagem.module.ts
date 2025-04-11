import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { PersonagemRepository } from './personagem.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PersonagemController],
  providers: [PersonagemService, PersonagemRepository],
  exports: [PersonagemRepository],
})
export class PersonagemModule {}
