import { IProductCatalogRepository } from "../../domain/Repositories/IProductCatalogRepository";

export class ProductCatalogRepository implements IProductCatalogRepository {
  getProducts(): any {
    return "hola mundo";
  }
}
