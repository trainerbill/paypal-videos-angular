import { Component, OnInit, Input } from '@angular/core';
import { ShippingService } from '../shipping.service';

@Component({
  selector: 'app-shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent implements OnInit {

  @Input() disableInputs: boolean;

  constructor(
    private readonly shippingService: ShippingService
  ) { }

  ngOnInit() {

  }


}
