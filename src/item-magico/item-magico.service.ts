import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
import { ItemMagicoRepository } from './item-magico.repository';
import { PersonagemRepository } from 'src/personagem/personagem.repository';

@Injectable()
export class ItemMagicoService {
  constructor(
    private readonly itemMagicoRepository: ItemMagicoRepository,
    private readonly personagemRepository: PersonagemRepository,
  ) {}
  async create(createItemMagicoDto: CreateItemMagicoDto) {
    const findedPersonagem = await this.personagemRepository.personagem({
      id: createItemMagicoDto.personagemId,
    });

    if (!findedPersonagem) {
      throw new NotFoundException('Personagem não encontrado');
    }

    const { personagemId, ...itemMagico } = createItemMagicoDto;

    return await this.itemMagicoRepository.createItemMagico({
      ...itemMagico,
      personagem: { connect: { id: personagemId } },
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
