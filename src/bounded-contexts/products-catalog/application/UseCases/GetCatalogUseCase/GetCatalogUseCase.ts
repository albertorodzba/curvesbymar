import { IGetCatalogUseCase } from "../../ports/in/IGetCatalogUseCase";
import { Product } from "../../../domain/Entities/Product";
import { Inject, Injectable } from "@nestjs/common";
import { IProductCatalogRepository } from "../../../domain/ports/out/IProductCatalogRepository";

@Injectable()
export class GetCatalogUseCase implements IGetCatalogUseCase {

  constructor(@Inject('IProductCatalogRepository') private readonly productCatalogRepo: IProductCatalogRepository) {}

  run(): Promise<Product[]> {
    return this.productCatalogRepo.findAll();
  }

}
