import { Module } from "@nestjs/common";
import { ProductCatalogController } from "./infrastructure/Controllers/productCatalog.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./infrastructure/Entities/Product.entity";
import { ProductCatalogRepository } from "./infrastructure/Persistence/ProductCatalogRepository";
import { GetCatalogUseCase } from "./application/UseCases/GetCatalogUseCase/GetCatalogUseCase";
import { FindOneProductUseCase } from "./application/UseCases/FindOneProductUseCase/FindOneProductUseCase";
import { CreateProductUseCase } from "./application/UseCases/CreateProductUseCase/CreateProductUseCase";


@Module({
  controllers: [ProductCatalogController],
  imports: [TypeOrmModule.forFeature([ ProductEntity ])],
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
