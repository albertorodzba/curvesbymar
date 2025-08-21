import { Inject, Injectable } from "@nestjs/common";
import { ICreateProductUseCase} from "../../ports/in/ICreateProductUseCase";
import { IProductCatalogRepository } from "../../../domain/Ports/out/IProductCatalogRepository";
import { Product } from "../../../domain/Entities/Product";
import { Category } from "../../../domain/Entities/Category";
import { Collection } from "../../../domain/Entities/Collection";
import { CreateProductRequestDto } from '../../DTOs/CreateProductRequest.dto';
import { CreateProductResponseDto } from '../../DTOs/CreateProductResponse.dto';

@Injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(@Inject("IProductCatalogRepository") private readonly productCatalogRepository: IProductCatalogRepository) {
  }

  run(product: CreateProductRequestDto): CreateProductResponseDto {
    // buscar que categorias y collections tiene el dto
    const newProduct = new Product(
      product.name, product.detail,
      product.colors, product.price,
      product.sku, product.stock,

      );
    this.productCatalogRepository.save(newProduct);

    // mapper al dto de response
    return new CreateProductResponseDto();
  }
}
