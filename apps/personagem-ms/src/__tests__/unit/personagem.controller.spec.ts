import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PersonagemController } from '../../personagem.controller';
import { PersonagemService } from '../../personagem.service';

describe('PersonagemController', () => {
  let app: INestApplication;
  let service: PersonagemService;

  const mockPersonagemService = {
    create: jest.fn((dto) => ({ id: '1', ...dto })),
    findAll: jest.fn(() => [{ id: '1', nome: 'Test Personagem' }]),
    findOne: jest.fn((id) => ({ id, nome: 'Test Personagem' })),
    update: jest.fn((id, dto) => ({ id, ...dto })),
    remove: jest.fn((id) => ({ id })),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonagemController],
      providers: [
        {
          provide: PersonagemService,
          useValue: mockPersonagemService,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    service = module.get<PersonagemService>(PersonagemService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /personagem - should create a personagem', async () => {
    const dto = { nome: 'New Personagem' };
    const response = await request(app.getHttpServer())
      .post('/personagem')
      .send(dto)
      .expect(201);

    expect(response.body).toEqual({ id: '1', ...dto });
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('GET /personagem - should return all personagens', async () => {
    const response = await request(app.getHttpServer())
      .get('/personagem')
      .expect(200);

    expect(response.body).toEqual([{ id: '1', nome: 'Test Personagem' }]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('GET /personagem/:id - should return a single personagem', async () => {
    const id = '1';
    const response = await request(app.getHttpServer())
      .get(`/personagem/${id}`)
      .expect(200);

    expect(response.body).toEqual({ id, nome: 'Test Personagem' });
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('PATCH /personagem/:id - should update a personagem', async () => {
    const id = '1';
    const dto = { nome: 'Updated Personagem' };
    const response = await request(app.getHttpServer())
      .patch(`/personagem/${id}`)
      .send(dto)
      .expect(200);

    expect(response.body).toEqual({ id, ...dto });
    expect(service.update).toHaveBeenCalledWith(id, dto);
  });

  it('DELETE /personagem/:id - should delete a personagem', async () => {
    const id = '1';
    const response = await request(app.getHttpServer())
      .delete(`/personagem/${id}`)
      .expect(200);

    expect(response.body).toEqual({ id });
    expect(service.remove).toHaveBeenCalledWith(id);
  });
});
