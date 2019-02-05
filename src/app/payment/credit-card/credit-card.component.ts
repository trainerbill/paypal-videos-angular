import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input() populateButton: boolean;
  @Input() disableInputs: boolean;

  constructor(
    public readonly paymentService: PaymentService,
  ) { }

  ngOnInit() {

  }

  populate() {
    this.paymentService.creditCard.number = '411111111111111';
    this.paymentService.creditCard.expdate = '02/2030';
    this.paymentService.creditCard.cvv = '456';
  }

}
