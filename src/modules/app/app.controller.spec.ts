import { Test, TestingModule } from '@nestjs/testing';
import AppController from './app.controller';
import AppService from './app.service';

describe('App Controller', () => {
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getAppHealth: () => ({
              status: 'up',
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<AppController>(AppController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('checkConnection', () => {
    it('should return healtcheck', () => {
      const status = controller.checkConnection();
      expect(status).toBeDefined();
    });
  });
});
