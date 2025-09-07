import { Email } from "../../../shared/domain/valueObjects/Email";

export class Admin {
  constructor(
    private name: string,
    private email: Email,
    private password: string,
  ) {}

  updateName(name: string): void {
    if (!name) {
      throw new Error("Name is required!");
    }
    this.name = name;
  }

  updateEmail(email: string): void {
    this.email = new Email(email);
  }

  updatePassword(password: string): void {
    this.password = password;
  }
}
