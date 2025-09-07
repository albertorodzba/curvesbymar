export class ValueNotValid extends Error {
  message: string = "Value not valid, should be a number greater than 0";
  constructor(message?: string) {
    super();
    if(message) this.message = message;
  }
}