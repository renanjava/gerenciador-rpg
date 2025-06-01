import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ItemMagicoModule } from './item-magico.module';

async function bootstrap() {
  const app = await NestFactory.create(ItemMagicoModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'item-magico-consumer',
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
void bootstrap();
