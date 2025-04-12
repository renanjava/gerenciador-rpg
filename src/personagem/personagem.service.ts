import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { PersonagemRepository } from './personagem.repository';
import { ItemMagicoRepository } from '../item-magico/item-magico.repository';

@Injectable()
export class PersonagemService {
  constructor(
    private readonly personagemRepository: PersonagemRepository,
    private readonly itemMagicoRepository: ItemMagicoRepository,
  ) {}
  async create(createPersonagemDto: CreatePersonagemDto) {
    if (createPersonagemDto.forca + createPersonagemDto.defesa > 10) {
      throw new BadRequestException(
        'Soma dos atributos de força e defesa não pode ser maior que 10',
      );
    }

    return await this.personagemRepository.createPersonagem(
      createPersonagemDto,
    );
  }

  async findAll() {
    return await this.personagemRepository.personagens({});
  }

  async findOne(id: string) {
    return await this.personagemRepository.personagem({ id });
  }

  async findAmuleto(id: string) {
    const personagemEncontrado = (await this.personagemRepository.personagem({
      id: id,
    })) as any;
    if (!personagemEncontrado) {
      throw new NotFoundException('Personagem não encontrado');
    }

    const amuletoEncontrado = personagemEncontrado.itensMagicos.find(
      (item) => item.tipoItemMagico === 'AMULETO',
    );
    if (!amuletoEncontrado) {
      throw new NotFoundException('Amuleto de personagem não encontrado');
    }

    return amuletoEncontrado;
  }

  async findItensMagicos(id: string) {
    const personagemEncontrado = await this.personagemRepository.personagem({
      id: id,
    });
    if (!personagemEncontrado) {
      throw new NotFoundException('Personagem não encontrado');
    }

    const itensMagicosEncontrados =
      await this.itemMagicoRepository.itensMagicos({
        where: { personagemId: id },
      });
    if (!itensMagicosEncontrados) {
      throw new NotFoundException('Itens mágicos de personagem não encontrado');
    }

    return itensMagicosEncontrados;
  }

  async update(id: string, updatePersonagemDto: UpdatePersonagemDto) {
    return await this.personagemRepository.updatePersonagem({
      where: { id },
      data: updatePersonagemDto,
    });
  }

  async remove(id: string) {
    return await this.personagemRepository.deletePersonagem({ id });
  }
}
