import { Module } from "@nestjs/common";
import { ProductCatalogController } from "./infrastructure/Controllers/productCatalog.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./infrastructure/Entities/Product.entity";
import { CollectionEntity } from "./infrastructure/Entities/Collection.entity";
import { ProductCatalogRepository } from "./infrastructure/Persistence/ProductCatalogRepository";
import { GetCatalogUseCase } from "./application/UseCases/GetCatalogUseCase/GetCatalogUseCase";


@Module({
  controllers: [ProductCatalogController],
  imports: [TypeOrmModule.forFeature([ ProductEntity, CollectionEntity])],
  providers: [
    {
      provide: "IProductCatalogRepository",
      useClass: ProductCatalogRepository,
    },
    {
      provide: "IGetCatalogUseCase",
      useClass: GetCatalogUseCase,
    },
  ],
})
export class ProductCatalogModule {}
