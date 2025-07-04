import { PartialType } from '@nestjs/mapped-types';
import { CreateRefrigerioDto } from './create-refrigerio.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRefrigerioDto extends PartialType(CreateRefrigerioDto) {
  @IsOptional()
  @IsString()
  descripcion?: string;
}
