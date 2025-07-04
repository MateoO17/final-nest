import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateRefrigerioDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 120)
  descripcion: string;
}
