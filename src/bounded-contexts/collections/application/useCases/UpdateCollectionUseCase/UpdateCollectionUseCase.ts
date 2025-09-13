import { Inject, Injectable } from "@nestjs/common";
import { ICollectionRepository } from "@/bounded-contexts/collections/domain/ports/out/ICollectionRepository";
import {
  UpdateCollectionRequestDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionRequest.dto";
import {
  UpdateCollectionResponseDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionResponse.dto";
import { messages } from "@/messages";
import { Collection } from "@/bounded-contexts/collections/domain/entities/Collection";


@Injectable()
export class UpdateCollectionUseCase {
  constructor(@Inject("ICollectionRepository") private readonly collectionRepository: ICollectionRepository) {
  }

  async run(collectiondto: UpdateCollectionRequestDto): Promise<UpdateCollectionResponseDto> {
    const collection: Collection = await this.collectionRepository.findById(collectiondto.id);

    collection.name = collectiondto.name;
    await this.collectionRepository.update(collection);

    const result = new UpdateCollectionResponseDto();
    result.message = messages.collection.success.updated;
    return result;
  }
}
