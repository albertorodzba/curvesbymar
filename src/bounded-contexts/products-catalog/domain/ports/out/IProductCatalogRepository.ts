import { Product } from "../../Entities/Product";

export interface IProductCatalogRepository {
  findAll(): Promise<Product[]>;
}
