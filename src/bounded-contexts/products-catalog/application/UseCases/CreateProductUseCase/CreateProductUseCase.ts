import { Inject, Injectable } from "@nestjs/common";
import { ICreateProductUseCase} from "../../ports/in/ICreateProductUseCase";
import { IProductCatalogRepository } from "../../../domain/Ports/out/IProductCatalogRepository";
import { Product } from "../../../domain/Entities/Product";
import { Category } from "../../../domain/Entities/Category";
import { Collection } from "../../../domain/Entities/Collection";
import { CreateProductRequestDto } from '../../DTOs/CreateProductRequest.dto';
import { CreateProductResponseDto } from '../../DTOs/CreateProductResponse.dto';
import { ICategoryRepository } from "../../../domain/Ports/out/ICategoryRepository";
import { ICollectionRepository } from "../../../domain/Ports/out/ICollectionRepository";

@Injectable()
export class CreateProductUseCase implements ICreateProductUseCase {
  constructor(
    @Inject("IProductCatalogRepository") private readonly productCatalogRepository: IProductCatalogRepository,
    @Inject("ICategoryRepository") private readonly categoryRepository: ICategoryRepository,
    @Inject("ICollectionRepository") private readonly collectionRepository: ICollectionRepository
  ) {}

  async run(product: CreateProductRequestDto): Promise<CreateProductResponseDto> {
    let categories: Category[] = [];
    let collections: Collection[] = [];

    // buscar que categorias y collections tiene el dto
    if (product?.categories !== undefined) {
      categories = await this.categoryRepository.findAll(product?.categories)
    }
    if(product?.collections !== undefined) {
      collections = await this.collectionRepository.findAll(product.collections);
    }

    const newProduct = new Product(
      product.name,
      product.detail,
      product.colors,
      product.price,
      product.sku,
      product.stock,
      collections,
      product.imageUrl,
      categories ?? undefined,
      );
    await this.productCatalogRepository.save(newProduct);

    // mapper al dto de response
    const responseDTO = new CreateProductResponseDto()
    responseDTO.productName = newProduct.name;
    responseDTO.message = "Product added successfully.";
    return responseDTO;
  }
}
