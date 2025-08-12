import { Product } from "../../Entities/Product";

export interface IProductCatalogRepository {
  findAll(): Promise<Product[]>;
  create(product: Product): Promise<void>;
}
