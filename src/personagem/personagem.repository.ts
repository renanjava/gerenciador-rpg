import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Personagem, Prisma } from '@prisma/client';

@Injectable()
export class PersonagemRepository {
  constructor(private prisma: PrismaService) {}

  async personagem(
    personagemWhereUniqueInput: Prisma.PersonagemWhereUniqueInput,
  ): Promise<Personagem | null> {
    return this.prisma.personagem.findUnique({
      where: personagemWhereUniqueInput,
    });
  }

  async personagens(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PersonagemWhereUniqueInput;
    where?: Prisma.PersonagemWhereInput;
    orderBy?: Prisma.PersonagemOrderByWithRelationInput;
  }): Promise<Personagem[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.personagem.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPersonagem(
    data: Prisma.PersonagemCreateInput,
  ): Promise<Personagem> {
    return this.prisma.personagem.create({
      data,
    });
  }

  async updatePersonagem(params: {
    where: Prisma.PersonagemWhereUniqueInput;
    data: Prisma.PersonagemUpdateInput;
  }): Promise<Personagem> {
    const { where, data } = params;
    return this.prisma.personagem.update({
      data,
      where,
    });
  }

  async deletePersonagem(
    where: Prisma.PersonagemWhereUniqueInput,
  ): Promise<Personagem> {
    return this.prisma.personagem.delete({
      where,
    });
  }
}
