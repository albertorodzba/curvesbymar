import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { ProductEntity } from "./Product.entity";

@Entity({ name: "category"})
export class CategorytEntity {
  @PrimaryGeneratedColumn("increment")
  Id: number

  @Column()
  Name: string

  @ManyToMany(() => ProductEntity, (products) => products.Categories)
  Products: ProductEntity[];
}