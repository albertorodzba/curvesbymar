import { Inject, Injectable } from "@nestjs/common";
import { ICreateCollectionUseCase } from "@/bounded-contexts/collections/application/ports/in/ICreateCollectionUseCase";
import {
  CreateCollectionRequestDto
} from "@/bounded-contexts/collections/application/dtos/CreateCollectionRequest.dto";
import {
  CreateCollectionResponseDto
} from "@/bounded-contexts/collections/application/dtos/CreateCollectionResponse.dto";
import { Collection } from "@/bounded-contexts/collections/domain/entities/Collection";
import { ICollectionRepository } from "@/bounded-contexts/collections/domain/ports/out/ICollectionRepository";
import { messages } from "@/messages";

@Injectable()
export class CreateCollectionUseCase implements ICreateCollectionUseCase {
  constructor(@Inject("ICollectionRepository") private readonly collectionRepository: ICollectionRepository) {}

  async run(request: CreateCollectionRequestDto): Promise<CreateCollectionResponseDto> {
    const collection: Collection = new Collection(request.name);
    await this.collectionRepository.create(collection);
    const response = new CreateCollectionResponseDto();
    response.message = messages.collection.success.added;
    return response;

  }
}
