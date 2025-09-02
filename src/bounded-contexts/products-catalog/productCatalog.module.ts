import { Module } from "@nestjs/common";
import { ProductCatalogController } from "./infrastructure/Controllers/productCatalog.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./infrastructure/Entities/Product.entity";
import { CollectionEntity } from "./infrastructure/Entities/Collection.entity";
import { ProductCatalogRepository } from "./infrastructure/Persistence/ProductCatalogRepository";
import { GetCatalogUseCase } from "./application/UseCases/GetCatalogUseCase/GetCatalogUseCase";
import { CategoryRepository } from "./infrastructure/Persistence/CategoryRepository";
import { FindOneProductUseCase } from "./application/UseCases/FindOneProductUseCase/FindOneProductUseCase";
import { CollectionRepository } from "./infrastructure/Persistence/CollectionRepository";
import { CreateProductUseCase } from "./application/UseCases/CreateProductUseCase/CreateProductUseCase";
import { CategorytEntity } from "./infrastructure/Entities/Category.entity";


@Module({
  controllers: [ProductCatalogController],
  imports: [TypeOrmModule.forFeature([ ProductEntity, CollectionEntity, CategorytEntity])],
  providers: [
    {
      provide: "IProductCatalogRepository",
      useClass: ProductCatalogRepository,
    },
    {
      provide: "ICategoryRepository",
      useClass: CategoryRepository
    },
    {
      provide: "ICollectionRepository",
      useClass: CollectionRepository,
    },
    {
      provide: "IGetCatalogUseCase",
      useClass: GetCatalogUseCase,
    },
    {
      provide: "IFindOneProductUseCase",
      useClass: FindOneProductUseCase
    },
    {
      provide: "ICreateProductUseCase",
      useClass: CreateProductUseCase
    }
  ],
})
export class ProductCatalogModule {}
