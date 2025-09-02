import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { CreateProductRequestDto } from "../../application/DTOs/CreateProductRequest.dto";
import { CreateProductResponseDto } from "../../application/DTOs/CreateProductResponse.dto";
import { IGetCatalogUseCase} from "../../application/ports/in/IGetCatalogUseCase";
import { Product } from "../../domain/Entities/Product";
import { ICreateProductUseCase } from "../../application/ports/in/ICreateProductUseCase";
import { IFindOneProductUseCase } from '../../application/ports/in/IFindOneProductUseCase';

@Controller("product-catalog")
export class ProductCatalogController {
  constructor(
    @Inject("ICreateProductUseCase") private readonly createProductUseCase: ICreateProductUseCase,
    @Inject("IFindOneProductUseCase") private readonly findOneProductUseCase: IFindOneProductUseCase,
    @Inject("IGetCatalogUseCase") private readonly getCatalogUseCase: IGetCatalogUseCase
  ) {}

  @Post()
  async create(@Body() request: CreateProductRequestDto): Promise<CreateProductResponseDto> {
    // return this.productCatalogService.create(createProductCatalogDto);
    return await this.createProductUseCase.run(request);
  }

  @Get()
  async findAll():Promise<Product[]> {
    // return this.productCatalogService.findAll();
    return await this.getCatalogUseCase.run();
  }


  @Get(":id")
  async findOne(@Param("id") id: string) {
    // return this.productCatalogService.findOne(+id);
    return await this.findOneProductUseCase.run(Number(id));
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
