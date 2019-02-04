export class CreditCard {

  public number: string;
  public expdate: string;
  public cvv: string;

  constructor(initializer?: Partial<CreditCard>) {
    if (initializer) {
      this.set(initializer);
    }
  }

  set(cc) {
    Object.assign(this, cc);
  }

}
