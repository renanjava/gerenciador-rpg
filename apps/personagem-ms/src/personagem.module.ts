import { Module } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { PersonagemController } from './personagem.controller';
import { PersonagemRepository } from './personagem.repository';
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
            clientId: 'personagem',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'personagem-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [PersonagemController],
  providers: [PersonagemService, PersonagemRepository],
})
export class PersonagemModule {}
