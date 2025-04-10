import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagemModule } from './personagem/personagem.module';
import { ItemMagicoModule } from './item-magico/item-magico.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PersonagemModule, ItemMagicoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
