import { Category } from "../../Entities/Category";

export interface ICategoryRepository {
  // findById(id: number): Promise<Category>;
  findAll(ids: number[]): Promise<Category[]>;
}
