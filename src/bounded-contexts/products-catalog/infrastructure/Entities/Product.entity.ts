import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { CollectionEntity } from './Collection.entity';
import { CategorytEntity } from "./Category.entity";

@Entity({ name: "product"})
export class ProductEntity {
  @PrimaryGeneratedColumn("increment")
  private Id: number

  @Column( { nullable: false })
  Colors: string

  @Column({ nullable: false, default: "" })
  Detail: string

  @Column({ nullable: true, default: "" })
  ImageUrl: string

  @Column({ nullable: false })
  Name: string

  @Column({ nullable: false, default: 0 })
  UnitPrice: number

  @Column({ nullable: true })
  Sku: string

  @Column({ nullable: true, default: 0 })
  Stock: number

  @Column({ nullable: false, default: new Date()   })
  CreatedAt: Date

  @ManyToMany(() => CollectionEntity, (collection) => collection.Products)
  @JoinTable({ name: "product_collections"})
  Collections: CollectionEntity[]

  @ManyToMany(() => CategorytEntity, (category) => category.Products)
  @JoinTable({ name: "product_categories"})
  Categories: CategorytEntity

}
