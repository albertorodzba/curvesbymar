import { Collection } from "../../Entities/Collection";

export interface ICollectionRepository {
  findAll(ids: number[]): Promise<Collection[]>;
}
