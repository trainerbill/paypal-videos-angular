import { Injectable } from '@angular/core';
import { ShippingAddress } from './shipping-address/shipping.address.class';


@Injectable()
export class ShippingService {

  private _shippingAddress: ShippingAddress = new ShippingAddress();
  private _shippingOption: string;

  constructor() { }

  get shippingAddress() {
    return this._shippingAddress;
  }

  get shippingOption() {
    return this._shippingOption;
  }

  set shippingOption(option) {
    this._shippingOption = option;
  }
}
