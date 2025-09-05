import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { ProductEntity } from "../../../products-catalog/infrastructure/Entities/Product.entity";
import { Category } from "../../domain/Entities/Category";

@Entity({ name: "category"})
export class CategorytEntity {
  @PrimaryGeneratedColumn("increment")
  Id: number

  @Column()
  Name: string

  @ManyToMany(() => ProductEntity, (products) => products.Categories)
  Products: ProductEntity[];

  toDomainEntity(category: CategorytEntity): Category {
    return new Category(category.Name, category.Id);
  }

  static fromDomain(category: Category): CategorytEntity {
    const categoryEntity: CategorytEntity = new CategorytEntity();
    categoryEntity.Id = category.id;
    categoryEntity.Name = category.name;
    return categoryEntity;
  }
}