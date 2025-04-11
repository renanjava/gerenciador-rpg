import { $Enums } from '@prisma/client';
import { ItemMagicoEntity } from '../entities/item-magico.entity';

export class CreateItemMagicoDto implements ItemMagicoEntity {
  nome: string;
  tipoItemMagico: $Enums.TipoItemMagico;
  forca: number;
  defesa: number;
  personagemId: string;
}
