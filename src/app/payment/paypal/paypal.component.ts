import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import $ from 'jquery';
import { PaypalServerService } from 'src/app/paypal-server/paypal-server.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {

  paypalOrder: any;

  constructor(
    private readonly paymentService: PaymentService,
    private readonly paypal: PaypalServerService,
  ) { }

  ngOnInit() {
    this.paymentService.paypalOrder
      .subscribe(order => this.paypalOrder = order);

      if (!(window as any).paypal) {
        $('#paypalIntegration').append(``);
        // tslint:disable-next-line:max-line-length
        const PAYPAL_SCRIPT = `https://www.paypal.com/sdk/js?client-id=${this.paypal.client}&intent=authorize&commit=false`;
        const container = document.head || document.body;
        const script = document.createElement('script');
        script.setAttribute('src', PAYPAL_SCRIPT);
        script.onerror = () => {
          this.putScript();
        };
        script.onload = () => {
          this.putScript();
        };
        container.appendChild(script);
      } else {
        this.putScript();
      }
  }

  putScript() {
    $('#paypalIntegration').append(`
      <script type="text/javascript">
        paypal.Buttons({
          style: {
              layout:  'horizontal',
          },
          createOrder: function(data, actions) {
              // Set up the transaction
              return actions.order.create({
                  purchase_units: [{
                      amount: {
                          value: '0.01'
                      }
                  }]
              });
          },
          onApprove: function(data, actions) {
              return actions.redirect('/review?' + Object.keys(data).map(key => key + '=' + data[key]).join('&'));
          },
          onError: function (err) {
              console.log(err);
          },
      })
      .render('#paypal-button');
    </script>`);
  }

}
