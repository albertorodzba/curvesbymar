export class Collection {
  readonly id: number;
  name: string;

  constructor(
    name: string,
  ) {
    if (!this.isEmptyName(name)) {
      this.name = name;
    }
  }

  isEmptyName(name: string): boolean {
    return name === undefined || name.length === 0;
  }
}
