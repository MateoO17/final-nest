import { Doc } from 'src/doc/entities/doc.entity';
import { Institucion } from 'src/institucion/entities/institucion.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;
  @Column({ type: 'varchar', length: 55 })
  nombre_user: string;
  @Column({ type: 'varchar', length: 55 })
  apellido_user: string;
  @Column({ type: 'varchar', length: 20 })
  numero_documento: string;
  @Column({ type: 'varchar', length: 15 })
  grado: string;
  @Column({ type: 'varchar', length: 15 })
  jornada: string;

  @ManyToOne(() => Doc, (doc) => doc.id_doc)
  tipo_doc: Doc;

  @ManyToOne(() => Rol, (rol) => rol.id_rol)
  rol: Rol;

  @ManyToOne(() => Institucion, (institucion) => institucion.users)
  colegio: Institucion;
}
