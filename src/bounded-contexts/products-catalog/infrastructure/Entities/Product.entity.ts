import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { CollectionEntity } from './Collection.entity';
import { CategorytEntity } from "./Category.entity";

@Entity({ name: "product"})
export class ProductEntity {
  @PrimaryGeneratedColumn("increment")
  Id: number

  @Column()
  Categories: CategorytEntity

  @Column()
  Colors: string

  @Column()
  Details: string

  @Column()
  ImageUrl: string

  @Column()
  Name: string

  @Column()
  UnitPrice: number

  @Column()
  Sku: string

  @Column()
  Stock: number

  @ManyToMany(() => CollectionEntity, (collection) => collection.Products)
  Collections: CollectionEntity[]
}
