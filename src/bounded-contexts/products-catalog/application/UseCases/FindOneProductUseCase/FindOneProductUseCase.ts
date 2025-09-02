import { Inject, Injectable } from "@nestjs/common";
import { IFindOneProductUseCase } from "../../ports/in/IFindOneProductUseCase";
import { IProductCatalogRepository } from "../../../domain/Ports/out/IProductCatalogRepository";
import { Product } from "../../../domain/Entities/Product";

@Injectable()
export class FindOneProductUseCase implements IFindOneProductUseCase {

  constructor(@Inject("IProductCatalogRepository") private productRepository: IProductCatalogRepository) {}

  async run(id: number): Promise<Product | null> {
   return await this.productRepository.findOne(id);
  }
}