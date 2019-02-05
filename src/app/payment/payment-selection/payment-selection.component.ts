import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from '../payment.service';
import { PaymentMethods } from '../payment.constants';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {

  public paymentMethods = Object.values(PaymentMethods);
  public paymentMethod: string;

  @Input() disableInputs: boolean;
  @Input() populateButton: boolean;

  constructor(
    private readonly paymentService: PaymentService
  ) { }

  ngOnInit() {
    if (this.paymentService.paymentMethod) {
      this.disableInputs = true;
    }
  }

}
