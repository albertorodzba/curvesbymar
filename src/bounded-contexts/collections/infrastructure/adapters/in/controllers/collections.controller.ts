import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from "@nestjs/common";
import { IGetAllCollectionUseCase } from '@/bounded-contexts/collections/application/ports/in/IGetAllCollectionUseCase';
import {
  IFindByIdCollectionUseCase
} from '@/bounded-contexts/collections/application/ports/in/IFindByIdCollectionUseCase';
import { ICreateCollectionUseCase } from "@/bounded-contexts/collections/application/ports/in/ICreateCollectionUseCase";
import { IUpdateCollectionUseCase } from '@/bounded-contexts/collections/application/ports/in/IUpdateCollectionUseCase';
import { IDeleteCollectionUseCase } from '@/bounded-contexts/collections/application/ports/in/IDeleteCollectionUseCase';
import {
  CreateCollectionRequestDto
} from '@/bounded-contexts/collections/infrastructure/dtos/CreateCollectionRequest.dto';
import {
  CreateCollectionResponseDto
} from "@/bounded-contexts/collections/infrastructure/dtos/CreateCollectionResponse.dto";

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
  async create(@Body() request: CreateCollectionRequestDto): Promise<CreateCollectionResponseDto> {
    const response: CreateCol
    return ;
  }

  @Get()
  async getAll(): Promise<GetAllCollectionResponseDto> {
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