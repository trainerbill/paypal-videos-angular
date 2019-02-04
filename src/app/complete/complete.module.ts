import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CompleteComponent } from './complete.component';

@NgModule({
  declarations: [
    CompleteComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class CompleteModule { }
