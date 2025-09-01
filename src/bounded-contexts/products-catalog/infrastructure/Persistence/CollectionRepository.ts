import { Injectable } from "@nestjs/common";
import { ICollectionRepository } from "../../domain/Ports/out/ICollectionRepository";
import { Collection } from "../../domain/Entities/Collection";
import { CollectionEntity } from "../Entities/Collection.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";

@Injectable()
export class CollectionRepository implements ICollectionRepository {
  constructor(@InjectRepository(CollectionEntity) private readonly collectionRepository: Repository<CollectionEntity>) {
  }

  async findAll(ids: number[]): Promise<Collection[]> {
    const collections: CollectionEntity[] = await this.collectionRepository.findBy({
      Id: In(ids)
    });
    return collections.map((collection: CollectionEntity): Collection => collection.toDomainEntity(collection))
  }
}
