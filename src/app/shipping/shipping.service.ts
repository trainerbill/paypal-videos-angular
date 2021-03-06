import { Injectable } from '@angular/core';
import { ShippingAddress } from './shipping-address/shipping.address.class';
import { ShippingOptions } from './shipping-options/shipping-options.constants';


@Injectable()
export class ShippingService {

  public _shippingAddress: ShippingAddress = new ShippingAddress();
  public _shippingOption: ShippingOptions;

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
