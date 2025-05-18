import { $Enums, Personagem } from '@prisma/client';

export class PersonagemEntity implements Omit<Personagem, 'id'> {
  nome: string;
  nomeAventureiro: string;
  classe: $Enums.ClassesPersonagem;
  level: number;
  forca: number;
  defesa: number;
}
