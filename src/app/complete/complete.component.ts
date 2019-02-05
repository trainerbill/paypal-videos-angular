import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment/payment.service';
import { PaypalServerService } from '../paypal-server/paypal-server.service';
import { concatMap, take, tap, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
  public response: any = {
    id: Math.random().toString(36).substring(7)
  };

  constructor(
    public readonly paymentService: PaymentService,
    public readonly paypal: PaypalServerService,
  ) { }

  ngOnInit() {
    this.paymentService.paypalOrder
        .pipe(concatMap(order => this.paypal.authorizeOrder(order.id)))
        .subscribe(res => this.response = res);

  }

}
