import { DeleteCollectionResultDto } from "@/bounded-contexts/collections/application/dtos/DeleteCollectionResult.dto";
import { DeleteCollectionCommand } from "@/bounded-contexts/collections/application/dtos/DeleteCollectionCommand.dto";

export interface IDeleteCollectionUseCase {
  run(command: DeleteCollectionCommand): Promise<DeleteCollectionResultDto>;
}