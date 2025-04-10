import { Module } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoRepository } from './item-magico.repository';

@Module({
  controllers: [ItemMagicoController],
  providers: [ItemMagicoService, ItemMagicoRepository],
})
export class ItemMagicoModule {}
