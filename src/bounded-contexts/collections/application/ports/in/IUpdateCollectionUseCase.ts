import {
  UpdateCollectionCommandDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionCommand.dto";
import {
  UpdateCollectionResultDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionResult.dto";

export interface IUpdateCollectionUseCase {
  run(request: UpdateCollectionCommandDto): Promise<UpdateCollectionResultDto>;
}
