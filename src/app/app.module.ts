import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartModule } from './cart/cart.module';
import { ShippingModule } from './shipping/shipping.module';
import { PaymentModule } from './payment/payment.module';
import { FormsModule } from '@angular/forms';
import { ReviewModule } from './review/review.module';
import { CompleteModule } from './complete/complete.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FlexLayoutModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CartModule,
    ShippingModule,
    PaymentModule,
    ReviewModule,
    CompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
