import { Test, TestingModule } from '@nestjs/testing';
import { ItemMagicoController } from '../../item-magico.controller';
import { ItemMagicoService } from '../../item-magico.service';

describe('ItemMagicoController', () => {
  let controller: ItemMagicoController;
  let service: ItemMagicoService;

  const mockItemMagicoService = {
    create: jest.fn((dto) => ({ id: '1', ...dto })),
    findAll: jest.fn(() => [{ id: '1', nome: 'Magic Sword' }]),
    findOne: jest.fn((id) => ({ id, nome: 'Magic Sword' })),
    update: jest.fn((id, dto) => ({ id, ...dto })),
    remove: jest.fn((id) => ({ id })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemMagicoController],
      providers: [
        {
          provide: ItemMagicoService,
          useValue: mockItemMagicoService,
        },
      ],
    }).compile();

    controller = module.get<ItemMagicoController>(ItemMagicoController);
    service = module.get<ItemMagicoService>(ItemMagicoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new item mágico', async () => {
      const dto = { nome: 'Magic Sword' };
      expect(await controller.create(dto as any)).toEqual({
        id: '1',
        nome: 'Magic Sword',
      });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('findAll', () => {
    it('should return an array of items mágicos', async () => {
      expect(await controller.findAll()).toEqual([
        { id: '1', nome: 'Magic Sword' },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single item mágico', async () => {
      expect(await controller.findOne('1')).toEqual({
        id: '1',
        nome: 'Magic Sword',
      });
      expect(service.findOne).toHaveBeenCalledWith('1');
    });
  });

  describe('update', () => {
    it('should update an item mágico', async () => {
      const dto = { nome: 'Updated Sword' };
      expect(await controller.update('1', dto)).toEqual({
        id: '1',
        nome: 'Updated Sword',
      });
      expect(service.update).toHaveBeenCalledWith('1', dto);
    });
  });

  describe('remove', () => {
    it('should remove an item mágico', async () => {
      expect(await controller.remove('1')).toEqual({ id: '1' });
      expect(service.remove).toHaveBeenCalledWith('1');
    });
  });
});
