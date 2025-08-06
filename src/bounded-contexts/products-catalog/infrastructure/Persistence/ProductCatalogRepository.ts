import { IProductCatalogRepository } from "../../domain/Repositories/IProductCatalogRepository";

export class ProductCatalogRepository implements IProductCatalogRepository {
  findAll(): any {
    return "hola mundo";
  }
}
