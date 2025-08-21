import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { CreateProductRequestDto } from "../../application/DTOs/CreateProductRequest.dto";
import { CreateProductResponseDto } from "../../application/DTOs/CreateProductResponse.dto";
import { IGetCatalogUseCase} from "../../application/ports/in/IGetCatalogUseCase";
import { Product } from "../../domain/Entities/Product";
import { ICreateProductUseCase } from "../../application/ports/in/ICreateProductUseCase";

@Controller("product-catalog")
export class ProductCatalogController {
  constructor(
    @Inject("ICreateProductUseCase") private readonly createProductUseCase: ICreateProductUseCase,

    @Inject("IGetCatalogUseCase") private readonly getCatalogUseCase: IGetCatalogUseCase
  ) {}

  @Post()
  create(@Body() request: CreateProductRequestDto): CreateProductResponseDto {
    // return this.productCatalogService.create(createProductCatalogDto);
    return this.createProductUseCase.run(request);
  }

  @Get()
  async findAll():Promise<Product[]> {
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
