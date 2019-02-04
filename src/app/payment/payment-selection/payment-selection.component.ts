import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-selection',
  templateUrl: './payment-selection.component.html',
  styleUrls: ['./payment-selection.component.scss']
})
export class PaymentSelectionComponent implements OnInit {

  public paymentMethods = ['Credit Card', 'Other'];
  public paymentMethod: string;

  @Input() disableInputs: boolean;
  @Input() populateButton: boolean;

  constructor(
    private readonly paymentService: PaymentService
  ) { }

  ngOnInit() {
  }

}
