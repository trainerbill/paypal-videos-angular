export class ShippingAddress {

  public name: string;
  public street: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;

  constructor(initializer?: Partial<ShippingAddress>) {
    if (initializer) {
      this.set(initializer);
    }
  }

  public set(initializer) {
    Object.assign(this, initializer);
  }
}
