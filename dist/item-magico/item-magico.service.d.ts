import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';
export declare class ItemMagicoService {
    create(createItemMagicoDto: CreateItemMagicoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateItemMagicoDto: UpdateItemMagicoDto): string;
    remove(id: number): string;
}
