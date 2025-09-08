import { Category } from "../../entities/Category";

export interface ICategoryRepository {
  findOne(id: number): Promise<Category | null>;
  findBy(id: number[]): Promise<Category[]>;
  getAll(): Promise<Category[]>;
  create(category: Category): Promise<void>;
}
