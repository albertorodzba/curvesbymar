import { Inject, Injectable } from "@nestjs/common";
import { ICreateProductUseCase} from "../../ports/in/ICreateProductUseCase";
import { IProductCatalogRepository } from "../../../domain/ports/out/IProductCatalogRepository";
import { Product } from "../../../domain/entities/Product";
import { Category } from "../../../../categories/domain/entities/Category";
import { Collection } from "../../../../collections/domain/entities/Collection";
import { CreateProductRequestDto } from '../../dtos/CreateProductRequest.dto';
import { CreateProductResponseDto } from '../../dtos/CreateProductResponse.dto';
import { ICategoryRepository } from "../../../../categories/domain/ports/out/ICategoryRepository";
import { ICollectionRepository } from "../../../../collections/domain/ports/out/ICollectionRepository";

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
