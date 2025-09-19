import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { CreateProductRequestDto } from "@/bounded-contexts/products-catalog/application/dtos/CreateProductRequest.dto";
import {
  CreateProductResponseDto
} from "@/bounded-contexts/products-catalog/application/dtos/CreateProductResponse.dto";
import { Product } from "@/bounded-contexts/products-catalog/domain/entities/Product";

@Controller("collections")
export class CollectionController {
  constructor(
    @Inject("IGetAllCollectionUseCase") private readonly getAllCollectionUseCase: IGetAllCollectionUseCase,
    @Inject("IFindByIdCollectionUseCase") private readonly findByIdUseCase: IFindByIdCollectionUseCase,
    @Inject("ICreateCollectionUseCase") private readonly createCollectionUseCase: ICreateCollectionUseCase,
    @Inject("IUpdateCollectionUseCase") private readonly updateCollectionUseCase: IUpdateCollectionUseCase,
    @Inject("IDeleteCollectionUseCase") private readonly deleteCollectionUseCase: IDeleteCollectionUseCase,
  ) {}

  @Post()
  async create(@Body() request: CreateProductRequestDto): Promise<CreateProductResponseDto> {
    // return this.productCatalogService.create(createProductCatalogDto);
    return await this.createCollectionUseCase.run(request);
  }

  @Get()
  async getAll():Promise<Product[]> {
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