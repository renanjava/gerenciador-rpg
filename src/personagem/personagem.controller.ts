import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';

@Controller('personagem')
export class PersonagemController {
  constructor(private readonly personagemService: PersonagemService) {}

  @Post()
  async create(@Body() createPersonagemDto: CreatePersonagemDto) {
    return await this.personagemService.create(createPersonagemDto);
  }

  @Get()
  async findAll() {
    return await this.personagemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.personagemService.findOne(id);
  }

  @Get(':id/amuleto')
  async findAmuleto(@Param('id') id: string) {
    return await this.personagemService.findAmuleto(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePersonagemDto: UpdatePersonagemDto,
  ) {
    return await this.personagemService.update(id, updatePersonagemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.personagemService.remove(id);
  }
}
