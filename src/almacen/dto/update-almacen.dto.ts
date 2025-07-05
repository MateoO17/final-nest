import { PartialType } from '@nestjs/mapped-types';
import { CreateAlmacenDto } from './create-almacen.dto';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class UpdateAlmacenDto extends PartialType(CreateAlmacenDto) {
  @IsOptional()
  @IsDate()
  hora_entrega?: Date;

  @IsOptional()
  @IsNumber()
  repartidor?: number;

  @IsOptional()
  @IsNumber()
  receptor?: number;

  @IsOptional()
  @IsNumber()
  alimento?: number;

  @IsOptional()
  @IsNumber()
  cantidad?: number;
}
