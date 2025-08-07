import { Module } from "@nestjs/common";
import { ProductCatalogController } from "./Controllers/productCatalog.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./Entities/Product.entity";
import { Collection } from "./Entities/Collection.entity";
import { ProductCatalogRepository } from "./Persistence/ProductCatalogRepository";

@Module({
  controllers: [ProductCatalogController],
  imports: [TypeOrmModule.forFeature([ Product, Collection])],
  providers: [ProductCatalogRepository],
})
export class ProductCatalogModule {}
