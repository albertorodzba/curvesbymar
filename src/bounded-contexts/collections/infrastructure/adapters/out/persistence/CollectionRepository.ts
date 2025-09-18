import { Injectable, NotFoundException } from "@nestjs/common";
import { ICollectionRepository } from "../../../../domain/ports/out/ICollectionRepository";
import { Collection } from "src/bounded-contexts/collections/domain/entities/Collection";
import { CollectionEntity } from "@/bounded-contexts/collections/infrastructure/entities/Collection.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { messages } from "@/messages";

@Injectable()
export class CollectionRepository implements ICollectionRepository {

  constructor(@InjectRepository(CollectionEntity) private readonly collectionRepository: Repository<CollectionEntity>) {
  }

  async getAll(): Promise<Collection[]> {
    const collections: CollectionEntity[] = await this.collectionRepository.find();
    return collections.map((collection: CollectionEntity): Collection =>  CollectionEntity.toDomainEntity(collection));
  }

  async findById(id: number): Promise<Collection> {
    const collection: CollectionEntity[] = await this.collectionRepository.findBy({
      Id: id
    })
    return CollectionEntity.toDomainEntity(collection[0]);
  }

  async create(collection: Collection): Promise<void> {
    const collectionEntity: CollectionEntity = new CollectionEntity();
    collectionEntity.Name = collection.name;
    await this.collectionRepository.save(collectionEntity);
  }

  async update(collection: Collection): Promise<void> {
    const collectionEntity: CollectionEntity = new CollectionEntity();
    collectionEntity.Name = collection.name;
    await this.collectionRepository.save(collectionEntity);
  }

  async remove(id: number): Promise<void> {
    const collection: Collection = await this.findById(id)
    if (collection) {
      await this.collectionRepository.remove(CollectionEntity.fromDomain(collection));
    } else {
      throw new NotFoundException(messages.collection.error.found);
    }
  }

}
