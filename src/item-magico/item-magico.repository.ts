import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemMagico, Prisma } from '@prisma/client';

@Injectable()
export class ItemMagicoRepository {
  constructor(private prisma: PrismaService) {}

  async itemMagico(
    ItemMagicoWhereUniqueInput: Prisma.ItemMagicoWhereUniqueInput,
  ): Promise<ItemMagico | null> {
    return this.prisma.itemMagico.findUnique({
      where: ItemMagicoWhereUniqueInput,
    });
  }

  async itensMagicos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ItemMagicoWhereUniqueInput;
    where?: Prisma.ItemMagicoWhereInput;
    orderBy?: Prisma.ItemMagicoOrderByWithRelationInput;
  }): Promise<ItemMagico[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.itemMagico.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createItemMagico(
    data: Prisma.ItemMagicoCreateInput,
  ): Promise<ItemMagico> {
    return this.prisma.itemMagico.create({
      data,
    });
  }

  async updateItemMagico(params: {
    where: Prisma.ItemMagicoWhereUniqueInput;
    data: Prisma.ItemMagicoUpdateInput;
  }): Promise<ItemMagico> {
    const { where, data } = params;
    return this.prisma.itemMagico.update({
      data,
      where,
    });
  }

  async deleteItemMagico(
    where: Prisma.ItemMagicoWhereUniqueInput,
  ): Promise<ItemMagico> {
    return this.prisma.itemMagico.delete({
      where,
    });
  }
}
