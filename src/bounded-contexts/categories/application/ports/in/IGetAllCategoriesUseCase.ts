import { Category } from "@/bounded-contexts/categories/domain/entities/Category";

export interface IGetAllCategoriesUseCase {
  run(): Promise<Category[]>
}