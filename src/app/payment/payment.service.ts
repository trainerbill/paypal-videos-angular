import { Injectable } from '@angular/core';
import { CreditCard } from './credit-card/credit-card.class';

@Injectable()
export class PaymentService {

  public creditCard = new CreditCard();
  public paymentMethod: string;

  constructor() { }
}
