import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAlmacenDto {
  @IsDate()
  @IsNotEmpty()
  hora_entrega: Date;

  @IsNotEmpty()
  @IsNumber()
  repartidor: number;

  @IsNotEmpty()
  @IsNumber()
  receptor: number;

  @IsNotEmpty()
  @IsNumber()
  alimento: number;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;
}
