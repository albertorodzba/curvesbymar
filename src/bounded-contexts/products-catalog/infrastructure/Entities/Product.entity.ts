import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
// import { Category } from "./0";
import { CollectionEntity } from './Collection.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn("increment")
  Id: number

  // @Column()
  // categories: Category

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
