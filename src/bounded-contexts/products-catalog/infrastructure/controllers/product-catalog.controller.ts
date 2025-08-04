import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProductCatalogDto } from "../dto/create-product-catalog.dto";
import { UpdateProductCatalogDto } from "../dto/update-product-catalog.dto";

@Controller("product-catalog")
export class ProductCatalogController {
  // constructor(private readonly productCatalogService: ProductCatalogService) {}

  @Post()
  create(@Body() createProductCatalogDto: CreateProductCatalogDto) {
    // return this.productCatalogService.create(createProductCatalogDto);
    return "";
  }

  @Get()
  findAll() {
    // return this.productCatalogService.findAll();
    return "HOLA YA ENCONTRASTE EL ENDOOINT DE CATALOG";
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
