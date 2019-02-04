import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatRadioModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { PaymentService } from './payment.service';
import { PaymentSelectionComponent } from './payment-selection/payment-selection.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

@NgModule({
  declarations: [CreditCardComponent, PaymentSelectionComponent, PaymentPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatRadioModule,
    MatInputModule,
    MatRadioModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  exports: [CreditCardComponent, PaymentSelectionComponent],
  providers: [PaymentService]
})
export class PaymentModule { }
