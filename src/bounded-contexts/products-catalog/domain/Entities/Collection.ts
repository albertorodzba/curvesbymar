export class Collection {
  constructor(
    private readonly collectionId: number,
    private name: string,
  ) {
    if (!this.isEmptyName(name)) {
      this.name = name;
    }
  }

  isEmptyName(name: string): boolean {
    return name === undefined || name.length === 0;
  }
}
