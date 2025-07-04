import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRefrigerioDto } from './dto/create-refrigerio.dto';
import { UpdateRefrigerioDto } from './dto/update-refrigerio.dto';
import { Refrigerio } from './entities/refrigerio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RefrigerioService {
  constructor(
    @InjectRepository(Refrigerio)
    private readonly refrigerioRepository: Repository<Refrigerio>,
  ) {}

  create(createAlimentoDto: CreateRefrigerioDto) {
    const alimento = this.refrigerioRepository.create(createAlimentoDto);
    return this.refrigerioRepository.save(alimento);
  }

  findAll() {
    return this.refrigerioRepository.find();
  }

  findOne(id: number) {
    return this.refrigerioRepository.findOne({ where: { id_refrigerio: id } });
  }

  async update(id: number, updateRefrigerioDto: UpdateRefrigerioDto) {
    const refrigerio = await this.refrigerioRepository.findOne({
      where: { id_refrigerio: id },
    });
    if (!refrigerio) {
      throw new HttpException('refrigerio not found', HttpStatus.NOT_FOUND);
    }
    const UpdateRefrigerio = Object.assign(refrigerio, updateRefrigerioDto);
    return this.refrigerioRepository.save(UpdateRefrigerio);
  }

  async remove(id: number) {
    const result = await this.refrigerioRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('refrigerio not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'refrigerio deleted successfully' };
  }
}
