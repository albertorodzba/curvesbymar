import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "../../../products-catalog/infrastructure/entities/Product.entity";
import { Collection } from "../../domain/entities/Collection";

@Entity({ name: "collection" })
export class CollectionEntity {
  @PrimaryGeneratedColumn("increment")
  Id: number;

  @Column({ nullable: false, default: "" })
  Name: string;

  @ManyToMany(() => ProductEntity, (product) => product.Collections)
  Products: ProductEntity[];

  static toDomainEntity(collection: CollectionEntity): Collection {
    return new Collection( collection.Name, collection.Id );
  }

  static fromDomain(collection: Collection): CollectionEntity {
    const collectionEntity: CollectionEntity = new CollectionEntity();
    collectionEntity.Name = collection.name;
    collectionEntity.Id = collection.id;
    return collectionEntity;
  }
}
