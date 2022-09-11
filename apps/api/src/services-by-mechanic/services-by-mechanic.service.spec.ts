import { Test, TestingModule } from '@nestjs/testing';
import { ServicesByMechanicService } from './services-by-mechanic.service';

describe('ServicesByMechanicService', () => {
  let service: ServicesByMechanicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicesByMechanicService],
    }).compile();

    service = module.get<ServicesByMechanicService>(ServicesByMechanicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
