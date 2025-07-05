import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Almacen } from './entities/almacen.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Refrigerio } from 'src/refrigerio/entities/refrigerio.entity';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectRepository(Almacen)
    private readonly almacenRepository: Repository<Almacen>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Refrigerio)
    private readonly alimentoRepository: Repository<Refrigerio>,
  ) {}

  async create(createAlmacenDto: CreateAlmacenDto) {
    const emisor = await this.userRepository.findOne({
      where: { id_user: createAlmacenDto.repartidor },
    });
    if (!emisor) {
      throw new HttpException('Repartidor not found', HttpStatus.NOT_FOUND);
    }
    const receptor = await this.userRepository.findOne({
      where: { id_user: createAlmacenDto.receptor },
    });
    if (emisor == receptor) {
      throw new Error('Repartidor and Receptor cannot be the same user');
    }
    if (!receptor) {
      throw new HttpException('Receptor not found', HttpStatus.NOT_FOUND);
    }
    const refrigerio = await this.alimentoRepository.findOne({
      where: { id_refrigerio: createAlmacenDto.alimento },
    });
    if (!refrigerio) {
      throw new HttpException('Alimento not found', HttpStatus.NOT_FOUND);
    }
    const entrega = this.almacenRepository.create({
      hora_entrega: createAlmacenDto.hora_entrega,
      repartidor: emisor,
      receptor: receptor,
      alimento: refrigerio,
      cantidad: createAlmacenDto.cantidad,
    });
    return this.almacenRepository.save(entrega);
  }

  async findAll(): Promise<Almacen[]> {
    return this.almacenRepository.find({
      relations: ['repartidor', 'receptor', 'alimento'],
    });
  }

  async findOne(id: number): Promise<Almacen> {
    const entrega = await this.almacenRepository.findOne({
      where: { id_entrega: id },
      relations: ['repartidor', 'receptor', 'alimento'],
    });
    if (!entrega) {
      throw new HttpException('Entrega not found', HttpStatus.NOT_FOUND);
    }
    return entrega;
  }

  async update(
    id: number,
    updateEntregaDto: UpdateAlmacenDto,
  ): Promise<Almacen> {
    const entrega_existente = await this.almacenRepository.findOneBy({
      id_entrega: id,
    });
    if (!entrega_existente) {
      throw new HttpException('Entrega not found', HttpStatus.NOT_FOUND);
    }
    const updatedEntrega = Object.assign(entrega_existente, updateEntregaDto);
    return this.almacenRepository.save(updatedEntrega);
  }

  async remove(id: number) {
    const result = await this.almacenRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('Entrega not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Entrega deleted successfully' };
  }
}
