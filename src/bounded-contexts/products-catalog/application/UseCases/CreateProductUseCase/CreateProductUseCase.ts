import { Inject, Injectable } from "@nestjs/common";
import { ICreateProductUseCase} from "../../ports/in/ICreateProductUseCase";
import { IProductCatalogRepository } from "../../../domain/Ports/out/IProductCatalogRepository";
import { Product } from "../../../domain/Entities/Product";
import { Category } from "../../../domain/Entities/Category";
import { Collection } from "../../../domain/Entities/Collection";
import { CreateProductRequestDto } from '../../DTOs/CreateProductRequest.dto';
import { CreateProductResponseDto } from '../../DTOs/CreateProductResponse.dto';
import { ICategoryRepository } from "../../../domain/Ports/out/ICategoryRepository";

@Injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @Inject("IProductCatalogRepository") private readonly productCatalogRepository: IProductCatalogRepository,
    @Inject("ICategoryRepository") private readonly categoryRepository: ICategoryRepository
  ) {}

  run(product: CreateProductRequestDto): CreateProductResponseDto {
    // buscar que categorias y collections tiene el dto
    if (product?.categories !== undefined) {
      const categories: Category[] = this.categoryRepository.findAll(product?.categories)
    }
    if(product?.collection !== undefined) {
      const collections: Collection[] = this.coll
    }

    const newProduct = new Product(
      product.name,
      product.detail,
      product.colors,
      product.price,
      product.sku,
      product.stock,
      product
      categories,
      );
    this.productCatalogRepository.save(newProduct);

    // mapper al dto de response
    return new CreateProductResponseDto();
  }
}
