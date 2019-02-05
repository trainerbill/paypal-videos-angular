import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payment/payment.service';
import { PaymentMethods } from '../payment/payment.constants';
import { map, filter, concatMap } from 'rxjs/operators';
import { PaypalServerService } from '../paypal-server/paypal-server.service';
import { ShippingService } from '../shipping/shipping.service';
import { ShippingOptions } from '../shipping/shipping-options/shipping-options.constants';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {



  constructor(
    public readonly route: ActivatedRoute,
    public readonly paymentService: PaymentService,
    public readonly paypal: PaypalServerService,
    public readonly shippingService: ShippingService,
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        map( params => params.get('orderID')),
        filter( orderid => orderid !== null),
        concatMap( orderid => this.paypal.getOrder(orderid)),
      )
      .subscribe( (order: any) => {
        this.paymentService.paypalOrder.next(order);
        this.paymentService.paymentMethod = PaymentMethods.PayPal;
        this.shippingService.shippingOption = ShippingOptions.OVERNIGHT;
      });
  }

}
