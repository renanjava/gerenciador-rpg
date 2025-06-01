import { $Enums } from '@prisma/client';
import { PersonagemEntity } from '../entities/personagem.entity';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePersonagemDto implements PersonagemEntity {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  nomeAventureiro: string;

  @IsEnum($Enums.ClassesPersonagem, {
    message: 'Personagem contém uma classe inválida',
  })
  @IsString()
  classe: $Enums.ClassesPersonagem;

  @IsNumber()
  @IsNotEmpty()
  level: number;

  @IsNumber()
  @IsNotEmpty()
  forca: number;

  @IsNumber()
  @IsNotEmpty()
  defesa: number;
}
