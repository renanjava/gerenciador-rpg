import { $Enums } from '@prisma/client';
import { PersonagemEntity } from '../entities/personagem.entity';
import { IsEnum } from 'class-validator';

export class CreatePersonagemDto implements PersonagemEntity {
  nome: string;
  nomeAventureiro: string;

  @IsEnum($Enums.ClassesPersonagem, {
    message: 'Personagem contém uma classe inválida',
  })
  classe: $Enums.ClassesPersonagem;
  level: number;
  forca: number;
  defesa: number;
}
