import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
import { ItemMagicoRepository } from './item-magico.repository';
import { PersonagemRepository } from '../personagem/personagem.repository';
import { PersonagemService } from '../personagem/personagem.service';

@Injectable()
export class ItemMagicoService {
  constructor(
    private readonly itemMagicoRepository: ItemMagicoRepository,
    private readonly personagemRepository: PersonagemRepository,
    private readonly personagemService: PersonagemService,
  ) {}
  async create(createItemMagicoDto: CreateItemMagicoDto) {
    const { personagemId, ...itemMagico } = createItemMagicoDto;

    const personagemEncontrado = await this.personagemRepository.personagem({
      id: personagemId,
    });

    if (!personagemEncontrado) {
      throw new NotFoundException('Personagem não encontrado');
    }

    if (itemMagico.tipoItemMagico === 'ARMADURA' && itemMagico.forca > 0) {
      throw new BadRequestException('Armadura não pode ter força');
    }

    if (itemMagico.tipoItemMagico === 'ARMA' && itemMagico.defesa > 0) {
      throw new BadRequestException('Arma não pode ter defesa');
    }

    if (itemMagico.defesa == 0 && itemMagico.forca == 0) {
      throw new BadRequestException('Item mágico deve ter força ou defesa');
    }

    if (itemMagico.tipoItemMagico === 'AMULETO') {
      try {
        await this.personagemService.findAmuleto(personagemId);
      } catch (error) {
        if (error.message === 'Amuleto de personagem não encontrado') {
          const itemMagicoCreated =
            await this.itemMagicoRepository.createItemMagico({
              ...itemMagico,
              personagem: { connect: { id: personagemId } },
            });

          await this.personagemService.update(personagemId, {
            defesa: personagemEncontrado.defesa + itemMagico.defesa,
            forca: personagemEncontrado.forca + itemMagico.forca,
          });

          return itemMagicoCreated;
        }
      }
      throw new BadRequestException('Personagem já possui um amuleto');
    }

    const itemMagicoCreated = await this.itemMagicoRepository.createItemMagico({
      ...itemMagico,
      personagem: { connect: { id: personagemId } },
    });

    await this.personagemService.update(personagemId, {
      defesa: personagemEncontrado.defesa + itemMagico.defesa,
      forca: personagemEncontrado.forca + itemMagico.forca,
    });

    return itemMagicoCreated;
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
