import { Inject, Injectable } from "@nestjs/common";
import {
  IFindByIdCollectionUseCase
} from "@/bounded-contexts/collections/application/ports/in/IFindByIdCollectionUseCase";
import { ICollectionRepository } from "@/bounded-contexts/collections/domain/ports/out/ICollectionRepository";
import {
  FindByIdCollectionResultDto
} from "@/bounded-contexts/collections/application/dtos/FindByIdCollectionResult.dto";

@Injectable()
export class FindByIdCollectionUseCase implements IFindByIdCollectionUseCase {
  constructor(@Inject("ICollectionRepository") private readonly collectionRepository: ICollectionRepository) {}

  async run(id: number): Promise<FindByIdCollectionResultDto> {
    const result: FindByIdCollectionResultDto = new FindByIdCollectionResultDto();
    result.collection = await this.collectionRepository.findById(id);
    return result;
  }
}
