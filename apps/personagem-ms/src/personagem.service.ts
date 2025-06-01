import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
import { PersonagemRepository } from './personagem.repository';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class PersonagemService {
  constructor(
    private readonly personagemRepository: PersonagemRepository,
    private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('get-item-magico');
    await this.kafkaClient.connect();
  }

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

    const itensMagicosEncontrados = await this.kafkaClient
      .send('get-item-magico', { where: { personagemId: id } })
      .toPromise();
    if (!itensMagicosEncontrados) {
      throw new NotFoundException('Itens mágicos de personagem não encontrado');
    }

    return itensMagicosEncontrados;
  }

  @MessagePattern('personagem-user')
  async update(
    @Payload()
    params: {
      id: string;
      updatePersonagemDto: UpdatePersonagemDto;
    },
  ) {
    return await this.personagemRepository.updatePersonagem({
      where: { id: params.id },
      data: params.updatePersonagemDto,
    });
  }

  async remove(id: string) {
    return await this.personagemRepository.deletePersonagem({ id });
  }
}
