import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, concatMap } from 'rxjs/operators';
import { PaymentService } from 'src/app/payment/payment.service';
import { PaymentMethods } from 'src/app/payment/payment.constants';
import { PaypalServerModule } from 'src/app/paypal-server/paypal-server.module';
import { PaypalServerService } from 'src/app/paypal-server/paypal-server.service';

@Component({
  selector: 'app-shipping-page',
  templateUrl: './shipping-page.component.html',
  styleUrls: ['./shipping-page.component.scss']
})
export class ShippingPageComponent implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    public readonly paymentService: PaymentService,
    public readonly paypal: PaypalServerService,
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
      });

  }

}
