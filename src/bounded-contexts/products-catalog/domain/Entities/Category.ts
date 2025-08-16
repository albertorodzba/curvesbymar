export class Category {
  readonly id: number;
  name: string;

  constructor(
    name: string,
    id?: number,
  ) {
    if(id) this.id = id;
    this.name = name;
  }
}
