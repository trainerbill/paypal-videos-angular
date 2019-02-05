import { Component, OnInit, Input } from '@angular/core';
import { ShippingService } from '../shipping.service';
import { ShippingOptions } from './shipping-options.constants';

@Component({
  selector: 'app-shipping-options',
  templateUrl: './shipping-options.component.html',
  styleUrls: ['./shipping-options.component.scss']
})
export class ShippingOptionsComponent implements OnInit {

  @Input() disableInputs: boolean;

  public shippingOptions = Object.values(ShippingOptions);

  constructor(
    public readonly shippingService: ShippingService
  ) { }

  ngOnInit() {

  }


}
