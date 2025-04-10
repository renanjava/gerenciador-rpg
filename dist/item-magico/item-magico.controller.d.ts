import { ItemMagicoService } from './item-magico.service';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
export declare class ItemMagicoController {
    private readonly itemMagicoService;
    constructor(itemMagicoService: ItemMagicoService);
    create(createItemMagicoDto: CreateItemMagicoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateItemMagicoDto: UpdateItemMagicoDto): string;
    remove(id: string): string;
}
