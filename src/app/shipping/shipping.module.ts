import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatRadioGroup } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ShippingPageComponent } from './shipping-page/shipping-page.component';
import { ShippingOptionsComponent } from './shipping-options/shipping-options.component';
import { ShippingService } from './shipping.service';
import { PaymentModule } from '../payment/payment.module';

@NgModule({
  declarations: [ShippingAddressComponent, ShippingPageComponent, ShippingOptionsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatRadioModule,
    RouterModule,
    FormsModule,
    PaymentModule,
  ],
  exports: [ShippingAddressComponent, ShippingOptionsComponent],
  providers: [ShippingService]
})
export class ShippingModule { }
