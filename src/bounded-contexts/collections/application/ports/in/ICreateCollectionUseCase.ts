import {
  CreateCollectionCommandDto
} from "@/bounded-contexts/collections/application/dtos/CreateCollectionCommand.dto";
import {
  CreateCollectionResultDto
} from "@/bounded-contexts/collections/application/dtos/CreateCollectionResult.dto";

export interface ICreateCollectionUseCase {
  run(request: CreateCollectionCommandDto): Promise<CreateCollectionResultDto>;
}
