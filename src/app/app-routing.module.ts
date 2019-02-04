import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartRoutes } from './cart/cart.routes';
import { ShippingRoutes } from './shipping/shipping.routes';
import { PaymentRoutes } from './payment/payment.routes';
import { ReviewRoutes } from './review/review.routes';
import { CompleteRoutes } from './complete/complete.routes';



const routes: Routes = [
  ...CartRoutes,
  ...ShippingRoutes,
  ...PaymentRoutes,
  ...ReviewRoutes,
  ...CompleteRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
