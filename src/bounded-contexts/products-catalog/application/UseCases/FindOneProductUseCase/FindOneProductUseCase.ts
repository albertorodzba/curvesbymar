import { Inject, Injectable } from "@nestjs/common";
import { IFindOneProductUseCase } from "../../ports/in/IFindOneProductUseCase";
import { ProductEntity } from "../../../infrastructure/Entities/Product.entity";
import { IProductCatalogRepository } from "../../../domain/Ports/out/IProductCatalogRepository";

@Injectable()
export class FindOneProductUseCase implements IFindOneProductUseCase {

  constructor(@Inject("IProductCatalogRepository") private productRepository: IProductCatalogRepository) {}

  run(id: number): Promise<ProductEntity> | [] {
    return this.productRepository.findOne(id);
  }
}