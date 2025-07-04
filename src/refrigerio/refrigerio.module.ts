import { Module } from '@nestjs/common';
import { RefrigerioService } from './refrigerio.service';
import { RefrigerioController } from './refrigerio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refrigerio } from './entities/refrigerio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Refrigerio])],
  controllers: [RefrigerioController],
  providers: [RefrigerioService],
  exports: [TypeOrmModule],
})
export class RefrigerioModule {}
