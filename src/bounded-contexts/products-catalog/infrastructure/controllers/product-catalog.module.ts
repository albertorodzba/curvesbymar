import { Module } from "@nestjs/common";
import { ProductCatalogController } from "./product-catalog.controller";

@Module({
  controllers: [ProductCatalogController],
  providers: [],
})
export class ProductCatalogModule {}
