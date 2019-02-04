import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatCardModule
  ],
  exports: [ItemComponent]
})
export class ItemModule { }
