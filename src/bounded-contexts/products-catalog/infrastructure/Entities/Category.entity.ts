import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { CollectionEntity } from './Collection.entity';

@Entity({ name: "category"})
export class CategorytEntity {
  @PrimaryGeneratedColumn("increment")
  Id: number

  @Column()
  Name: string

  @ManyToMany(() => CategoryEntity, (category) => category.Products)
  Collections: CollectionEntity[]
}