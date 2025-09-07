export class Email {
  constructor(private readonly email: string) {
    if (this.isValidEmail(email)) this.email = email;
  }

  isValidEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
}
