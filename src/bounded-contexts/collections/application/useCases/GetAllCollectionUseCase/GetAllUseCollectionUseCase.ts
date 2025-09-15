import { Inject, Injectable } from "@nestjs/common";
import { IGetAllCollectionUseCase } from "@/bounded-contexts/collections/application/ports/in/IGetAllCollectionUseCase";

@Injectable()
export class GetAllCollectionUseCase implements IGetAllCollectionUseCase {
  constructor(@Inject() private readonly collectionRepository: ICollectionRepository) {
  }
}