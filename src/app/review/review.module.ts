import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review.component';
import { MatListModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShippingModule } from '../shipping/shipping.module';
import { PaymentModule } from '../payment/payment.module';

@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ShippingModule,
    PaymentModule
  ]
})
export class ReviewModule { }
