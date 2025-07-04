import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitucionDto } from './create-institucion.dto';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateInstitucionDto extends PartialType(CreateInstitucionDto) {
  @IsOptional()
  @IsString()
  @Length(1, 55)
  nombre_institucion?: string;

  @IsOptional()
  @IsString()
  @Length(1, 55)
  direccion_institucion?: string;
}
