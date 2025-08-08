// Este sería el puerto de entrada, porque en este caso el controller usaría la implementacion de esta clase atraves de esta interfaz
// Es de entrada porque del controller entra al application

import { Product } from "../../domain/Entities/Product";

export interface IGetCatalogUseCase {
  execute(): Product[];
}
