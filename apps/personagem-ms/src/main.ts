import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PersonagemModule } from './personagem.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(PersonagemModule);
  app.useGlobalPipes(new ValidationPipe());
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'personagem-consumer',
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3002);
}
void bootstrap();
