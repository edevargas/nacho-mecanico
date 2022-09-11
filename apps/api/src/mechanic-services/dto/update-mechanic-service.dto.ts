import { PartialType } from '@nestjs/mapped-types';
import { CreateMechanicServiceDto } from './create-mechanic-service.dto';

export class UpdateMechanicServiceDto extends PartialType(CreateMechanicServiceDto) {}
