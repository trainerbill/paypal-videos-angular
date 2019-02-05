import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalServerService } from './paypal-server.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [PaypalServerService],
})
export class PaypalServerModule { }
