import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { CreateItemMagicoDto } from './dto/create-item-magico.dto';
import { UpdateItemMagicoDto } from './dto/update-item-magico.dto';

@Controller('item-magico')
export class ItemMagicoController {
  constructor(private readonly itemMagicoService: ItemMagicoService) {}

  @Post()
  async create(@Body() createItemMagicoDto: CreateItemMagicoDto) {
    return this.itemMagicoService.create(createItemMagicoDto);
  }

  @Get()
  async findAll() {
    return this.itemMagicoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.itemMagicoService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItemMagicoDto: UpdateItemMagicoDto,
  ) {
    return await this.itemMagicoService.update(id, updateItemMagicoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.itemMagicoService.remove(id);
  }
}
