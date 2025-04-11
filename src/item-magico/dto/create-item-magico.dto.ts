import { $Enums } from '@prisma/client';
import { ItemMagicoEntity } from '../entities/item-magico.entity';
import { IsEnum } from 'class-validator';

export class CreateItemMagicoDto implements ItemMagicoEntity {
  nome: string;

  @IsEnum($Enums.TipoItemMagico, { message: 'Tipo de item mágico inválido' })
  tipoItemMagico: $Enums.TipoItemMagico;
  forca: number;
  defesa: number;
  personagemId: string;
}
