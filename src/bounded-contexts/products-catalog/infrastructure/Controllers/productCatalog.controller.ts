import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { CreateProductRequestDto } from "../../application/DTOs/CreateProductRequest.dto";
import { CreateProductResponseDto } from "../../application/DTOs/CreateProductResponse.dto";
import { IProductCatalogRepository } from "../../domain/Ports/out/IProductCatalogRepository";
import { IGetCatalogUseCase} from "../../application/ports/in/IGetCatalogUseCase";

@Controller("product-catalog")
export class ProductCatalogController {
  constructor(
    @Inject("IProductCatalogRepository")
    private readonly productCatalogRepo: IProductCatalogRepository,
    @Inject("IGetCatalogUseCase") private readonly getCatalogUseCase: IGetCatalogUseCase
  ) {}

  @Post()
  create(@Body() createProductCatalogDto: CreateProductRequestDto) {
    // return this.productCatalogService.create(createProductCatalogDto);
    return "";
  }

  @Get()
  async findAll() {
    // return this.productCatalogService.findAll();
    return await this.getCatalogUseCase.run();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    // return this.productCatalogService.findOne(+id);
    return "";
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductCatalogDto: CreateProductResponseDto,
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
