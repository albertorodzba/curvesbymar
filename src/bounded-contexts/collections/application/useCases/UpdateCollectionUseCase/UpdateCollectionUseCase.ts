import { Inject, Injectable } from "@nestjs/common";
import { ICollectionRepository } from "@/bounded-contexts/collections/domain/ports/out/ICollectionRepository";
import {
  UpdateCollectionCommandDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionCommand.dto";
import {
  UpdateCollectionResultDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionResult.dto";
import { messages } from "@/messages";
import { Collection } from "@/bounded-contexts/collections/domain/entities/Collection";
import { IUpdateCollectionUseCase } from "@/bounded-contexts/collections/application/ports/in/IUpdateCollectionUseCase";


@Injectable()
export class UpdateCollectionUseCase implements IUpdateCollectionUseCase {
  constructor(@Inject("ICollectionRepository") private readonly collectionRepository: ICollectionRepository) {
  }

  async run(collectiondto: UpdateCollectionCommandDto): Promise<UpdateCollectionResultDto> {
    const collection: Collection = await this.collectionRepository.findById(collectiondto.id);

    collection.name = collectiondto.name;
    await this.collectionRepository.update(collection);

    const result = new UpdateCollectionResultDto();
    result.message = messages.collection.success.updated;
    return result;
  }
}
