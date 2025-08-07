import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductCatalogDto } from "../dto/create-product-catalog.dto";
import { UpdateProductCatalogDto } from "../dto/update-product-catalog.dto";
import { ProductCatalogRepository } from "../Persistence/ProductCatalogRepository";

@Controller("product-catalog")
export class ProductCatalogController {
  constructor(private readonly productCatalogRepo: ProductCatalogRepository) {}

  @Post()
  create(@Body() createProductCatalogDto: CreateProductCatalogDto) {
    // return this.productCatalogService.create(createProductCatalogDto);
    return "";
  }

  @Get()
  async findAll() {
    // return this.productCatalogService.findAll();
    return await this.productCatalogRepo.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    // return this.productCatalogService.findOne(+id);
    return "";
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductCatalogDto: UpdateProductCatalogDto,
  ) {
    // return this.productCatalogService.update(+id, updateProductCatalogDto);
    return "";
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    // return this.productCatalogService.remove(+id);
    return "";
  }
}
