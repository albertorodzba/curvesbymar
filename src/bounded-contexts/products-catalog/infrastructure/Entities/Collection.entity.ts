import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./Product.entity";

@Entity({ name: "collections" })
export class CollectionEntity {
  @PrimaryGeneratedColumn("increment")
  Id: number;

  @Column()
  Name: string;

  @ManyToMany(() => ProductEntity, (product) => product.Collections)
  @JoinTable({ name: "collection_products"})
  Products: ProductEntity[];
}
