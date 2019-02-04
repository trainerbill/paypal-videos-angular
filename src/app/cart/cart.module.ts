import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ItemModule } from '../item/item.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatListModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent],
  imports: [
    FlexLayoutModule,
    CommonModule,
    ItemModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
  ]
})
export class CartModule { }
