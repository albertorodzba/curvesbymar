import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { CreateProductCatalogDto } from "../dto/create-product-catalog.dto";
import { UpdateProductCatalogDto } from "../dto/update-product-catalog.dto";
import { IProductCatalogRepository } from "../../domain/ports/out/IProductCatalogRepository";

@Controller("product-catalog")
export class ProductCatalogController {
  constructor(
    @Inject("IProductCatalogRepository")
    private readonly productCatalogRepo: IProductCatalogRepository
  ) {}

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
