import { $Enums, ItemMagico } from '@prisma/client';

export class ItemMagicoEntity implements Omit<ItemMagico, 'id'> {
  nome: string;
  tipoItemMagico: $Enums.TipoItemMagico;
  forca: number;
  defesa: number;
  personagemId: string;
}
