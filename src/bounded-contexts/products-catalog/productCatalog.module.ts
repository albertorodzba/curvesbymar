import { Module } from "@nestjs/common";
import { ProductCatalogController } from "./infrastructure/adapters/in/controllers/productCatalog.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./infrastructure/entities/Product.entity";
import { ProductCatalogRepository } from "./infrastructure/adapters/out/persistence/ProductCatalogRepository";
import { GetCatalogUseCase } from "./application/useCases/GetCatalogUseCase/GetCatalogUseCase";
import { FindOneProductUseCase } from "./application/useCases/FindOneProductUseCase/FindOneProductUseCase";
import { CreateProductUseCase } from "./application/useCases/CreateProductUseCase/CreateProductUseCase";
import { CategoriesModule } from "@/bounded-contexts/categories/categories.module";
import { CollectionsModule } from "@/bounded-contexts/collections/collections.module";


@Module({
  controllers: [ProductCatalogController],
  imports: [
    TypeOrmModule.forFeature([ ProductEntity ]),
    CategoriesModule,
    CollectionsModule,
  ],
  providers: [
    {
      provide: "IProductCatalogRepository",
      useClass: ProductCatalogRepository,
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
