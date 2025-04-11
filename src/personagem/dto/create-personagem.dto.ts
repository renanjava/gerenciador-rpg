import { $Enums } from '@prisma/client';
import { PersonagemEntity } from '../entities/personagem.entity';

export class CreatePersonagemDto implements PersonagemEntity {
  nome: string;
  nomeAventureiro: string;
  classe: $Enums.ClassesPersonagem;
  level: number;
  forca: number;
  defesa: number;
}
