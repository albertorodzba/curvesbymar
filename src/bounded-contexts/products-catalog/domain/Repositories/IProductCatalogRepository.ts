import { Product } from "../Entities/Product";

export interface IProductCatalogRepository {
  findAll(): any;
}
