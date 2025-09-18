import { Inject, Injectable } from "@nestjs/common";
import { IGetAllCollectionUseCase } from "@/bounded-contexts/collections/application/ports/in/IGetAllCollectionUseCase";
import { ICollectionRepository } from "@/bounded-contexts/collections/domain/ports/out/ICollectionRepository";
import { messages } from "@/messages";
import { Collection } from "@/bounded-contexts/collections/domain/entities/Collection";
import { GetAllCollectionResultDto } from "@/bounded-contexts/collections/application/dtos/GetAllCollectionResult.dto";

@Injectable()
export class GetAllCollectionUseCase implements IGetAllCollectionUseCase {
  constructor(@Inject() private readonly collectionRepository: ICollectionRepository) {}

  async run(): Promise<GetAllCollectionResultDto> {
    const collections: Collection[] = await this.collectionRepository.getAll();

    const result: GetAllCollectionResultDto = new GetAllCollectionResultDto();
    result.message = messages.collection.success.added;
    result.collections = collections;
    return result;
  }
}