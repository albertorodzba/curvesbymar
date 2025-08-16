import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./Product.entity";

@Entity({ name: "collection" })
export class CollectionEntity {
  @PrimaryGeneratedColumn("increment")
  Id: number;

  @Column({ nullable: false, default: "" })
  Name: string;

  @ManyToMany(() => ProductEntity, (product) => product.Collections)
  Products: ProductEntity[];
}
