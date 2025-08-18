export class UnitPrice {
  readonly value: number;
  constructor(value: number) {

  }

  validate(value: number) {
    return value > 0
  }
}