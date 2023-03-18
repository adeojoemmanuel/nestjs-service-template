import { Test, TestingModule } from '@nestjs/testing';
import AppController from './app.controller';
import AppService from './app.service';

describe('App Controller', () => {
  let service: AppService;
  let controller: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, AppController],
    }).compile();

    service = module.get<AppService>(AppService);
    controller = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAppHealth', () => {
    it('should return healthcheck up', async () => {
      const status = await service.getAppHealth();
      expect(status).toBeDefined();
      expect(status.status).toEqual('up');
    });

    it('should return healthcheck up in controller', async () => {
      const status = await controller.checkHeath();
      expect(status).toBeDefined();
      expect(status).toEqual(true);
    });

    it('should return check up in controller', async () => {
      const status = await controller.checkUp();
      expect(status).toBeDefined();
      expect(status.status).toEqual('up');
    });
  });

  describe('isAppReady', () => {
    it('should return true if app is ready', async () => {
      const status = await service.isAppReady();
      expect(status).toBeDefined();
      expect(status).toEqual(true);
    });

    it('should return true if app is ready in controller', async () => {
      const status = await controller.checkReady();
      expect(status).toBeDefined();
      expect(status).toEqual(true);
    });
  });
});
