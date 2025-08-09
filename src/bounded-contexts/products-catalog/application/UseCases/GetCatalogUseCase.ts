import { IGetCatalogUseCase } from "../ports/in/IGetCatalogUseCase";
import { Product } from "../../domain/Entities/Product";

@Injectable()
export class GetCatalogUseCase implements IGetCatalogUseCase {
  execute(): Product[] {}
}