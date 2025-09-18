import { IDeleteCollectionUseCase } from "@/bounded-contexts/collections/application/ports/in/IDeleteCollectionUseCase";
import { DeleteCollectionCommand } from "../../dtos/DeleteCollectionCommand.dto";
import { DeleteCollectionResultDto } from "../../dtos/DeleteCollectionResult.dto";
import { messages } from "@/messages";
import { Inject } from "@nestjs/common";
import { ICollectionRepository } from "@/bounded-contexts/collections/domain/ports/out/ICollectionRepository";

export class DeleteCollectionUseCase implements IDeleteCollectionUseCase {
  constructor(@Inject("ICollectionRepository") private readonly collectionRepository: ICollectionRepository){}
  async run(command: DeleteCollectionCommand): Promise<DeleteCollectionResultDto> {
    await this.collectionRepository.remove(command.id);

    const result: DeleteCollectionResultDto = new DeleteCollectionResultDto();
    result.message = messages.collection.success.deleted;
    return result;
  }
}