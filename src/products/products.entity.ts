import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  available: string;
}
