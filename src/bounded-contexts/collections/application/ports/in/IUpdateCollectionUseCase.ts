import {
  UpdateCollectionRequestDto
} from "@/bounded-contexts/collections/application/dtos/UpdateCollectionRequest.dto";

export interface IUpdateCollectionUseCase {
  run(request: UpdateCollectionRequestDto): Promise<UpdateCollectionResponseDto>;
}
