import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { CollectionEntity } from './Collection.entity';
import { CategorytEntity } from "./Category.entity";
import { Product } from "../../domain/Entities/Product";
import { Category } from "../../domain/Entities/Category";

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

  @Column({ nullable: false, default: new Date() })
  CreatedAt: Date

  @ManyToMany(() => CollectionEntity, (collection) => collection.Products)
  @JoinTable({ name: "product_collections"})
  Collections: CollectionEntity[]

  @ManyToMany(() => CategorytEntity, (category) => category.Products)
  @JoinTable({ name: "product_categories"})
  Categories: CategorytEntity[]

  // Mapper
  toEntityDomain(product: ProductEntity): Product {
    return new Product(
      product.Name,
      product.Detail,
      product.Colors,
      product.UnitPrice,
      product.Sku,
      product.Stock,
      product.Collections.map((collection) => collection.toDomainEntity(collection)),
      product.ImageUrl,
      product.Categories.map((category) => category.toDomainEntity(category)),
      product.Id);
  }

  fromDomain(product: Product): ProductEntity {
    const productEntity = new ProductEntity()
    productEntity.Colors = product.colors;
    productEntity.Detail = product.detail;
    productEntity.ImageUrl = product.imageUrl;
    productEntity.Name = product.name;
    productEntity.UnitPrice = product.unitPrice;
    productEntity.Sku = product.sku;
    productEntity.Stock = product.stock;
    productEntity.Collections = product.collection.map((collection) => CollectionEntity.fromDomain(collection)); // todo: hacer estatico el metodo de collection entity
    productEntity.Categories = product.categories.map((category) => CategorytEntity.fromDomain(category));
    return productEntity;
  }
}
