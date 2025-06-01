import { Module } from '@nestjs/common';
import { ItemMagicoService } from './item-magico.service';
import { ItemMagicoController } from './item-magico.controller';
import { ItemMagicoRepository } from './item-magico.repository';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    PrismaModule,
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'item-magico',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'item-magico-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ItemMagicoController],
  providers: [ItemMagicoService, ItemMagicoRepository],
})
export class ItemMagicoModule {}
