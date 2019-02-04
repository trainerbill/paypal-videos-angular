import { Component, OnInit, Input } from '@angular/core';
import { ShippingAddress } from './shipping.address.class';
import { ShippingService } from '../shipping.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  @Input() disableInputs: boolean;
  @Input() populateButton: boolean;
  @Input() lsPrepopulate: boolean;
  // public shippingAddress: ShippingAddress;

  constructor(
    private readonly shippingService: ShippingService,
  ) { }

  ngOnInit() {

  }

  populate() {
    this.shippingService.shippingAddress.name = 'David Larusso';
    this.shippingService.shippingAddress.street = '2211 N. 1st Street';
    this.shippingService.shippingAddress.city = 'San Jose';
    this.shippingService.shippingAddress.state = 'CA';
    this.shippingService.shippingAddress.zip = '95131';
    this.shippingService.shippingAddress.country = 'US';
  }

}
