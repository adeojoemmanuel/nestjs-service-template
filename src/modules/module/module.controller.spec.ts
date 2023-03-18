import { Test, TestingModule } from '@nestjs/testing';
import ImagesController from './module.controller';
import ImagesService from './module.service';

describe('Images  Controller', () => {
  let controller: ImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesController],
      providers: [
        {
          provide: ImagesService,
          useValue: { validateWebHook: () => jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<ImagesController>(ImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be validate webhook', () => {
    const result = controller.validateWebHook({}, {
      headers: { 'hook-name': 'pre-create' },
    } as any);
    expect(result).toBeDefined();
  });
});
