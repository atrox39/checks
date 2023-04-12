import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 60, nullable: false })
  name!: string;

  @Column({ length: 60, nullable: false })
  horario!: string;

  @Column({ length: 60, nullable: false })
  tipo_horario!: string;
}
