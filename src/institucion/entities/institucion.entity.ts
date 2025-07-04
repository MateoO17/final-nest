import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Institucion {
  @PrimaryGeneratedColumn()
  id_institucion: number;

  @Column({ type: 'varchar', length: 55 })
  nombre_institucion: string;

  @Column({ type: 'varchar', length: 55 })
  direccion_institucion: string;

  @OneToMany(() => User, (user) => user.colegio)
  users: User[];
}
