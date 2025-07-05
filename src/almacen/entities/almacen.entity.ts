import { Refrigerio } from 'src/refrigerio/entities/refrigerio.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Almacen {
  @PrimaryGeneratedColumn()
  id_entrega: number;

  @Column({ type: 'int', default: 1 })
  cantidad: number;

  @Column({ type: 'timestamp' })
  hora_entrega: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_repartidor' })
  repartidor: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_receptor' })
  receptor: User;

  @ManyToOne(() => Refrigerio, (refrigerio) => refrigerio.id_refrigerio)
  alimento: Refrigerio;
}
