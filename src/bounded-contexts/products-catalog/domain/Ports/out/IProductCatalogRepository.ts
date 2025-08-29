import { Product } from "../../Entities/Product";

export interface IProductCatalogRepository {
  findAll(): Promise<Product[]>;
  save(product: Product): Promise<void>;
  findOne(id: number): Promise<Product> | null;
}
