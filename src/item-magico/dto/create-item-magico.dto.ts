import { $Enums } from '@prisma/client';
import { ItemMagicoEntity } from '../entities/item-magico.entity';
import { IsEnum, Max, Min } from 'class-validator';

export class CreateItemMagicoDto implements ItemMagicoEntity {
  nome: string;

  @IsEnum($Enums.TipoItemMagico, { message: 'Tipo de item mágico inválido' })
  tipoItemMagico: $Enums.TipoItemMagico;

  @Min(0, { message: 'A força do item mágico deve ser igual ou maior que 0' })
  @Max(10, { message: 'A força do item mágico deve ser igual ou menor que 10' })
  forca: number;

  @Min(0, { message: 'A defesa do item mágico deve ser igual ou maior que 0' })
  @Max(10, {
    message: 'A defesa do item mágico deve ser igual ou menor que 10',
  })
  defesa: number;
  personagemId: string;
}
