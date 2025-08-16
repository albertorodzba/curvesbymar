import { Product } from "../../Entities/Product";
import { ProductEntity } from "../../../infrastructure/Entities/Product.entity";

export interface IProductCatalogRepository {
  findAll(): Promise<Product[]>;
  create(product: Product): Promise<void>;
}
