import { Test, TestingModule } from '@nestjs/testing';
import { MechanicServicesService } from './mechanic-services.service';

describe('MechanicServicesService', () => {
  let service: MechanicServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechanicServicesService],
    }).compile();

    service = module.get<MechanicServicesService>(MechanicServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
