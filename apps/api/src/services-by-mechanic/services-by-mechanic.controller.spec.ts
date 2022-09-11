import { Test, TestingModule } from '@nestjs/testing';
import { ServicesByMechanicController } from './services-by-mechanic.controller';
import { ServicesByMechanicService } from './services-by-mechanic.service';

describe('ServicesByMechanicController', () => {
  let controller: ServicesByMechanicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesByMechanicController],
      providers: [ServicesByMechanicService],
    }).compile();

    controller = module.get<ServicesByMechanicController>(ServicesByMechanicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
