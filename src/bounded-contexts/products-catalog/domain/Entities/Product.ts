export class Product {
  constructor(
    private readonly id: number,
    private categoryId: any,
    private colors: any,
    private details: string,
    private image: string,
    private name: string,
    private price: number,
    private sku: string,
    private stock: number,
  ) {}
}
