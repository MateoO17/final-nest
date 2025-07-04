import { User } from 'src/user/entities/user.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column({ type: 'varchar', length: 55 })
  nombre_rol: string;

  @OneToMany(() => User, (user) => user.rol)
  users: User[];
}
