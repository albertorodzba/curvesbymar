import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from "@nestjs/common";
import { Category } from "@/bounded-contexts/categories/domain/entities/Category";
import { ICreateCategoryUseCase } from "@/bounded-contexts/categories/application/ports/in/ICreateCategoryUseCase";
import {
  CreateProductResponseDto
} from "@/bounded-contexts/products-catalog/application/dtos/CreateProductResponse.dto";
import { CreateCategoryResponseDto } from "@/bounded-contexts/categories/application/dtos/CreateCategoryResponse.dto";
import { CreateCategoryRequestDto } from "@/bounded-contexts/categories/application/dtos/CreateCategoryRequest.dto";
import { IGetAllCategoriesUseCase } from "@/bounded-contexts/categories/application/ports/in/IGetAllCategoriesUseCase";

@Controller('categories')
export class CategoriesController {
  constructor(@Inject("ICreateCategoryUseCase") private readonly createCategoryUseCase: ICreateCategoryUseCase,
              @Inject("IGetAllCategoriesUseCase") private readonly getAllUseCase: IGetAllCategoriesUseCase,) {}

  @Post()
  async create(@Body() request: CreateCategoryRequestDto): Promise<CreateCategoryResponseDto> {
    let response: CreateCategoryResponseDto = new CreateCategoryResponseDto();
    try {
      response = await this.createCategoryUseCase.run(request);
    } catch {
      response.message = "something went wrong";
    }
    return response;
  }

  @Get()
  async getAll(): Promise<Category[]> {
    return await this.getAllUseCase.run();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<any> {}

  @Patch(":id")
  async update(@Param("id") id: string, @Body() request: any): Promise<any> {}

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<any> {}
}
