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
import { PersonagemEntity } from '../personagem/entities/personagem.entity';

@Injectable()
export class ItemMagicoService {
  constructor(
    private readonly itemMagicoRepository: ItemMagicoRepository,
    private readonly personagemRepository: PersonagemRepository,
    private readonly personagemService: PersonagemService,
  ) {}

  async create(createItemMagicoDto: CreateItemMagicoDto) {
    this.validarItemMagico(createItemMagicoDto);

    const personagemBuscado = await this.validarPersonagem(createItemMagicoDto);
    await this.atualizarAtributosPersonagem(
      personagemBuscado,
      createItemMagicoDto,
    );

    const { personagemId, ...itemMagico } = createItemMagicoDto;
    const itemMagicoCreated = await this.itemMagicoRepository.createItemMagico({
      ...itemMagico,
      personagem: { connect: { id: personagemId } },
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

  private validarItemMagico(createItemMagicoDto: CreateItemMagicoDto) {
    if (
      createItemMagicoDto.tipoItemMagico === 'ARMADURA' &&
      createItemMagicoDto.forca > 0
    ) {
      throw new BadRequestException('Armadura não pode ter força');
    }

    if (
      createItemMagicoDto.tipoItemMagico === 'ARMA' &&
      createItemMagicoDto.defesa > 0
    ) {
      throw new BadRequestException('Arma não pode ter defesa');
    }

    if (createItemMagicoDto.defesa == 0 && createItemMagicoDto.forca == 0) {
      throw new BadRequestException('Item mágico deve ter força ou defesa');
    }
  }

  private async validarPersonagem(createItemMagicoDto: CreateItemMagicoDto) {
    const personagemEncontrado = await this.personagemRepository.personagem({
      id: createItemMagicoDto.personagemId,
    });

    if (!personagemEncontrado) {
      throw new NotFoundException('Personagem não encontrado');
    }

    if (createItemMagicoDto.tipoItemMagico === 'AMULETO') {
      try {
        await this.personagemService.findAmuleto(
          createItemMagicoDto.personagemId,
        );
      } catch (error) {
        if (error.message === 'Amuleto de personagem não encontrado') {
          return personagemEncontrado;
        }
      }
      throw new BadRequestException('Personagem já possui um amuleto');
    }
    return personagemEncontrado;
  }

  private async atualizarAtributosPersonagem(
    personagem: PersonagemEntity,
    itemMagico: CreateItemMagicoDto,
  ) {
    await this.personagemService.update(itemMagico.personagemId, {
      defesa: personagem.defesa + itemMagico.defesa,
      forca: personagem.forca + itemMagico.forca,
    });
  }
}
