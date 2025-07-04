import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateInstitucionDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 55)
  nombre_institucion: string;
  @IsString()
  @IsNotEmpty()
  @Length(1, 55)
  direccion_institucion: string;
}
