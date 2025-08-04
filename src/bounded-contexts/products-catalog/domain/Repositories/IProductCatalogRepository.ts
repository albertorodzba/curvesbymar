import { Product } from "../Entities/Product";

export interface IProductCatalogRepository {
  getProducts(): Product[];
}
