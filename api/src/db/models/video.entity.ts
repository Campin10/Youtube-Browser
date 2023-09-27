import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: number;

  @Column({ type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
  updatedAt: number;
}