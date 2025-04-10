import { Injectable } from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { PersonagemRepository } from './personagem.repository';

@Injectable()
export class PersonagemService {
  constructor(private readonly personagemRepository: PersonagemRepository) {}
  async create(createPersonagemDto: CreatePersonagemDto) {
    return await this.personagemRepository.createPersonagem(
      createPersonagemDto,
    );
  }

  async findAll() {
    return await this.personagemRepository.personagens({});
  }

  async findOne(id: string) {
    return await this.personagemRepository.personagem(id);
  }

  async update(id: string, updatePersonagemDto: UpdatePersonagemDto) {
    return await this.personagemRepository.updatePersonagem({
      where: id,
      data: updatePersonagemDto,
    });
  }

  async remove(id: string) {
    return await this.personagemRepository.deletePersonagem(id);
  }
}
