import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institucion } from 'src/institucion/entities/institucion.entity';
import { User } from './entities/user.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Doc } from 'src/doc/entities/doc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Rol, Institucion, Doc])],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UserModule {}
