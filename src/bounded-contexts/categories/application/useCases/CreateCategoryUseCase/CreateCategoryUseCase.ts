import { Inject, Injectable } from "@nestjs/common";
import { ICreateCategoryUseCase } from "@/bounded-contexts/categories/application/ports/in/ICreateCategoryUseCase";
import { CreateCategoryResponseDto } from "@/bounded-contexts/categories/application/dtos/CreateCategoryResponse.dto";
import { CreateCategoryRequestDto } from "@/bounded-contexts/categories/application/dtos/CreateCategoryRequest.dto";
import { messages } from "@/messages";
import { ICategoryRepository } from "@/bounded-contexts/categories/domain/ports/out/ICategoryRepository";
import { Category } from "@/bounded-contexts/categories/domain/entities/Category";

@Injectable()
export class CreateCategoryUseCase implements ICreateCategoryUseCase {
  constructor(@Inject("ICategoryRepository") private readonly categoryRepository: ICategoryRepository) {}

  async run(request: CreateCategoryRequestDto): Promise<CreateCategoryResponseDto> {
    const category: Category = new Category(request.name);
    await this.categoryRepository.create(category);

    const response = new CreateCategoryResponseDto();
    response.message = messages.product.success.added;
    return response;
  }
}