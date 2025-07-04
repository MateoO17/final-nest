import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RefrigerioService } from './refrigerio.service';
import { CreateRefrigerioDto } from './dto/create-refrigerio.dto';
import { UpdateRefrigerioDto } from './dto/update-refrigerio.dto';

@Controller('refrigerio')
export class RefrigerioController {
  constructor(private readonly refrigerioService: RefrigerioService) {}

  @Post()
  create(@Body() createRefrigerioDto: CreateRefrigerioDto) {
    return this.refrigerioService.create(createRefrigerioDto);
  }

  @Get()
  findAll() {
    return this.refrigerioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.refrigerioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRefrigerioDto: UpdateRefrigerioDto,
  ) {
    return this.refrigerioService.update(+id, updateRefrigerioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.refrigerioService.remove(+id);
  }
}
