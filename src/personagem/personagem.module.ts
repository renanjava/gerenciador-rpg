import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { PersonagemRepository } from './personagem.repository';

@Module({
  controllers: [PersonagemController],
  providers: [PersonagemService, PersonagemRepository],
})
export class PersonagemModule {}
