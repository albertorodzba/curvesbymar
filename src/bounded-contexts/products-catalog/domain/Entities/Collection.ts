export class Collection {
  readonly id: number;
  name: string;

  constructor(
    name: string,
    id?: number,
  ) {
    if (!this.isEmptyName(name)) this.name = name;
    if (id) this.id = id;
  }

  isEmptyName(name: string): boolean {
    return name === undefined || name.length === 0;
  }
}
