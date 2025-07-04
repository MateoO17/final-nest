import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  @Length(1, 55)
  nombre?: string;

  @IsOptional()
  @IsString()
  @Length(1, 55)
  apellido?: string;

  @IsOptional()
  @IsString()
  @Length(1, 20)
  numero_documento?: string;

  @IsOptional()
  @IsString()
  @Length(1, 15)
  grado?: string;

  @IsOptional()
  @IsString()
  @Length(1, 15)
  jornada?: string;

  @IsOptional()
  @IsNumber()
  tipo_doc?: number;

  @IsOptional()
  @IsNumber()
  rol?: number;

  @IsOptional()
  @IsNumber()
  institucion?: number;
}
