import { Module } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoRepository } from './item-magico.repository';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ItemMagicoController],
  providers: [ItemMagicoService, ItemMagicoRepository],
})
export class ItemMagicoModule {}
