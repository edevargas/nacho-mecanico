import { PartialType } from '@nestjs/swagger';
import { CreateServicesByMechanicDto } from './create-services-by-mechanic.dto';

export class UpdateServicesByMechanicDto extends PartialType(CreateServicesByMechanicDto) {}
