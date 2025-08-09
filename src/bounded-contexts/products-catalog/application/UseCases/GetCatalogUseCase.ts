import { IGetCatalogUseCase } from "../ports/in/IGetCatalogUseCase";
import { Product } from "../../domain/Entities/Product";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetCatalogUseCase implements IGetCatalogUseCase {

  getCatalog(): Product[] {
    return "";
  }

}
