import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Checada extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: Date, nullable: false })
  hora_entrada!: Date;

  @Column({ type: Date, nullable: true })
  hora_salida!: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  fecha!: Date;

  @ManyToOne(() => User)
  @JoinColumn()
  usuario!: User;
}
