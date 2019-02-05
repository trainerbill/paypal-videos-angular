import { Component, OnInit, Input } from '@angular/core';
import { ShippingAddress } from './shipping.address.class';
import { ShippingService } from '../shipping.service';
import { PaypalServerService } from 'src/app/paypal-server/paypal-server.service';
import { ActivatedRoute } from '@angular/router';
import { map, concatMap, tap, filter } from 'rxjs/operators';
import { from } from 'rxjs';
import { PaymentService } from 'src/app/payment/payment.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  @Input() disableInputs: boolean;
  @Input() populateButton: boolean;
  @Input() lsPrepopulate: boolean;

  disablePopulate = false;

  constructor(
    private readonly shippingService: ShippingService,
    private readonly paypal: PaypalServerService,
    private readonly route: ActivatedRoute,
    private readonly paymentService: PaymentService,
  ) { }

  async ngOnInit() {
    this.paymentService.paypalOrder
      .subscribe( (order: any) => {
        this.shippingService.shippingAddress.name = `${order.payer.name.given_name} ${order.payer.name.surname}`;
        this.shippingService.shippingAddress.street = `${order.payer.address.address_line_1}`;
        this.shippingService.shippingAddress.city = `${order.payer.address.admin_area_2}`;
        this.shippingService.shippingAddress.state = `${order.payer.address.admin_area_1}`;
        this.shippingService.shippingAddress.zip = `${order.payer.address.postal_code}`;
        this.shippingService.shippingAddress.country = `${order.payer.address.country_code}`;
        this.disableInputs = true;
      });
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
