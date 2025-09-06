import { Collection } from "../../entities/Collection";

export interface ICollectionRepository {
  findAll(ids: number[]): Promise<Collection[]>;
  findById(id: number): Promise<Collection>;
  create(collection: Collection): Promise<void>;
  update(collection: Collection): Promise<void>;
  remove(id: number): Promise<void>;
}
