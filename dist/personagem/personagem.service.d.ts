import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemService {
    create(createPersonagemDto: CreatePersonagemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePersonagemDto: UpdatePersonagemDto): string;
    remove(id: number): string;
}
