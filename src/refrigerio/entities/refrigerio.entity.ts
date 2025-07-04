import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Refrigerio {
  @PrimaryGeneratedColumn()
  id_refrigerio: number;

  @Column({ type: 'varchar', length: 120 })
  descripcion: string;
}
