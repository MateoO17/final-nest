import { Module } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { AlmacenController } from './almacen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Almacen } from './entities/almacen.entity';
import { User } from 'src/user/entities/user.entity';
import { Refrigerio } from 'src/refrigerio/entities/refrigerio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Almacen, User, Refrigerio])],
  controllers: [AlmacenController],
  providers: [AlmacenService],
})
export class AlmacenModule {}
