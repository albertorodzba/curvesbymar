import { Inject, Injectable } from "@nestjs/common";
import { ICreateProductUseCase} from "../../ports/in/ICreateProductUseCase";
import { IProductCatalogRepository } from "../../../domain/ports/out/IProductCatalogRepository";
import { Product } from "../../../domain/Entities/Product";
import { Category } from "../../../domain/Entities/Category";
import { Collection } from "../../../domain/Entities/Collection";

@Injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(@Inject("IProductCatalogRepository") private readonly productCatalogRepository: IProductCatalogRepository) {
  }

  //Todo: Aqui va un DTO desde el controller
  run(product: Product): Promise<void> {

    const newProduct = new Product(product.categories, product.colors, product.details, product.image, product.name, product.price, product.sku, product.stock, product.collection);
    this.productCatalogRepository.create(newProduct);
  }
}