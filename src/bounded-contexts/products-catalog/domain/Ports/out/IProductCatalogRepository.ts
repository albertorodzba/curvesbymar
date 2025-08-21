import { Product } from "../../Entities/Product";
import { ProductEntity } from "../../../infrastructure/Entities/Product.entity";

export interface IProductCatalogRepository {
  findAll(): Promise<Product[]>;
  save(product: Product): Promise<void>;
  findOne(id: number): Promise<ProductEntity> | null;
}
