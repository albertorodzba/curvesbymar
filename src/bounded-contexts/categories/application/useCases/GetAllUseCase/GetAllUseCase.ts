import { Inject, Injectable } from "@nestjs/common";
import {
  IGetAllCategoriesUseCase,
} from "@/bounded-contexts/categories/application/ports/in/IGetAllCategoriesUseCase";
import { Category } from "@/bounded-contexts/categories/domain/entities/Category";
import { ICategoryRepository } from "@/bounded-contexts/categories/domain/ports/out/ICategoryRepository";

@Injectable()
export class GetAllUseCase implements IGetAllCategoriesUseCase {
  constructor(@Inject("ICategoryRepository") private categoryRepository: ICategoryRepository) {
  }

  async run(): Promise<Category[]> {
    return await this.categoryRepository.getAll();
  }
}