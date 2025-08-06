import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Collection {
  @PrimaryGeneratedColumn("increment")
  Id: number;

  @Column()
  Name: string;

  @ManyToMany(() => Product, (product) => product.Collections)
  @JoinTable({ name: "collection_products"})
  Products: Product[];
}