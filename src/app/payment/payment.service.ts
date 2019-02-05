import { Injectable } from '@angular/core';
import { CreditCard } from './credit-card/credit-card.class';
import { PaymentMethods } from './payment.constants';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class PaymentService {

  public creditCard = new CreditCard();
  public paymentMethod: PaymentMethods;
  public paypalEmail: string;
  public paypalOrder = new ReplaySubject<any>(1);

  constructor() { }
}
