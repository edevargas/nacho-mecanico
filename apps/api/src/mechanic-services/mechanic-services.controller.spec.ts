import { Test, TestingModule } from '@nestjs/testing';
import { MechanicServicesController } from './mechanic-services.controller';
import { MechanicServicesService } from './mechanic-services.service';

describe('MechanicServicesController', () => {
  let controller: MechanicServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MechanicServicesController],
      providers: [MechanicServicesService],
    }).compile();

    controller = module.get<MechanicServicesController>(MechanicServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
