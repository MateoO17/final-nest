import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefrigerioModule } from './refrigerio/refrigerio.module';
import { InstitucionModule } from './institucion/institucion.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { DocModule } from './doc/doc.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USER'),
        database: config.get('DB_NAME'),
        entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
        charset: 'utf8mb4',
      }),
    }),
    RefrigerioModule,
    InstitucionModule,
    UserModule,
    RolModule,
    DocModule,
  ],
})
export class AppModule {}
