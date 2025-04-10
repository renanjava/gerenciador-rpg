import { PersonagemService } from './personagem.service';
import { CreatePersonagemDto } from './dto/create-personagem.dto';
import { UpdatePersonagemDto } from './dto/update-personagem.dto';
export declare class PersonagemController {
    private readonly personagemService;
    constructor(personagemService: PersonagemService);
    create(createPersonagemDto: CreatePersonagemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePersonagemDto: UpdatePersonagemDto): string;
    remove(id: string): string;
}
