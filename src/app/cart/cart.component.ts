import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import $ from 'jquery';
import { PaypalServerService } from '../paypal-server/paypal-server.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public paypal: PaypalServerService,
  ) {}

  ngOnInit() {
    $('#paypalIntegration').append(`<div id="paypal-button"></div>`);
    // tslint:disable-next-line:max-line-length
    const PAYPAL_SCRIPT = `https://www.paypal.com/sdk/js?client-id=${this.paypal.client}&intent=authorize&commit=false`;
    const container = document.head || document.body;
    const script = document.createElement('script');
    script.setAttribute('src', PAYPAL_SCRIPT);
    script.onload = function () {
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
                return actions.redirect('/shipping?' + Object.keys(data).map(key => key + '=' + data[key]).join('&'));
            },
            onError: function (err) {
                console.log(err);
            },
        })
        .render('#paypal-button');
      </script>`);
    };
    container.appendChild(script);
  }

}
