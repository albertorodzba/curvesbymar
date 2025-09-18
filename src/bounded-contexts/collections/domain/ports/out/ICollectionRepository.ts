import { Collection } from "../../entities/Collection";

export interface ICollectionRepository {
  getAll(): Promise<Collection[]>;
  findById(id: number): Promise<Collection>;
  create(collection: Collection): Promise<void>;
  update(collection: Collection): Promise<void>;
  remove(id: number): Promise<void>;
}
