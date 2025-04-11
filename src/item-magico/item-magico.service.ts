import { Injectable } from '@nestjs/common';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
import { ItemMagicoRepository } from './item-magico.repository';

@Injectable()
export class ItemMagicoService {
  constructor(private readonly itemMagicoRepository: ItemMagicoRepository) {}
  async create(createItemMagicoDto: CreateItemMagicoDto) {
    await this.itemMagicoRepository.createItemMagico({
      ...createItemMagicoDto,
      personagem: { connect: { id: createItemMagicoDto.personagemId } },
    });
  }

  async findAll() {
    return await this.itemMagicoRepository.itensMagicos({});
  }

  async findOne(id: string) {
    return await this.itemMagicoRepository.itemMagico({ id });
  }

  async update(id: string, updateItemMagicoDto: UpdateItemMagicoDto) {
    return await this.itemMagicoRepository.updateItemMagico({
      where: { id },
      data: updateItemMagicoDto,
    });
  }

  async remove(id: string) {
    return await this.itemMagicoRepository.deleteItemMagico({ id });
  }
}
