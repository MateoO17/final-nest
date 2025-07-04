import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateInstitucionDto } from './dto/create-institucion.dto';
import { UpdateInstitucionDto } from './dto/update-institucion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Institucion } from './entities/institucion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitucionService {
  constructor(
    @InjectRepository(Institucion)
    private readonly institucionRepository: Repository<Institucion>,
  ) {}
  create(createInstitucionDto: CreateInstitucionDto) {
    const colegio = this.institucionRepository.create(createInstitucionDto);
    return this.institucionRepository.save(colegio);
  }

  findAll() {
    return this.institucionRepository.find();
  }

  findOne(id: number) {
    return this.institucionRepository.findOne({
      where: { id_institucion: id },
    });
  }

  async update(id: number, updateInstitucionDto: UpdateInstitucionDto) {
    const institucion = await this.institucionRepository.findOne({
      where: { id_institucion: id },
    });
    if (!institucion) {
      throw new HttpException('Institucion not found', HttpStatus.NOT_FOUND);
    }
    const updatedInstitucion = Object.assign(institucion, updateInstitucionDto);
    return this.institucionRepository.save(updatedInstitucion);
  }

  async remove(id: number) {
    const result = await this.institucionRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('Institucion not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Institucion deleted successfully' };
  }
}
