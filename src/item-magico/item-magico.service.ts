import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
import { ItemMagicoRepository } from './item-magico.repository';
import { PersonagemRepository } from '../personagem/personagem.repository';
import { PersonagemService } from 'src/personagem/personagem.service';

@Injectable()
export class ItemMagicoService {
  constructor(
    private readonly itemMagicoRepository: ItemMagicoRepository,
    private readonly personagemRepository: PersonagemRepository,
    private readonly personagemService: PersonagemService,
  ) {}
  async create(createItemMagicoDto: CreateItemMagicoDto) {
    const { personagemId, ...itemMagico } = createItemMagicoDto;

    const findedPersonagem = await this.personagemRepository.personagem({
      id: personagemId,
    });

    if (!findedPersonagem) {
      throw new NotFoundException('Personagem não encontrado');
    }

    if (itemMagico.tipoItemMagico === 'AMULETO') {
      try {
        await this.personagemService.findAmuleto(personagemId);
      } catch (error) {
        if (error.message === 'Amuleto de personagem não encontrado') {
          return await this.itemMagicoRepository.createItemMagico({
            ...itemMagico,
            personagem: { connect: { id: personagemId } },
          });
        }
      }
      throw new BadRequestException('Personagem já possui um amuleto');
    }
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
