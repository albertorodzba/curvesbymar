import { Category } from "../../entities/Category";

export interface ICategoryRepository {
  // findById(id: number): Promise<Category>;
  findAll(ids: number[]): Promise<Category[]>;
}
