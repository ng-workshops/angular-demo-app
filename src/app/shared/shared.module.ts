import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';

import { CanClickDirective } from './directives/can-click.directive';
import { InputFloatComponent } from './input-float/input-float.component';
import { FloatValidatorDirective } from './input-float/float.validator.directive';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    CanClickDirective,
    InputFloatComponent,
    FloatValidatorDirective,
    JoinPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputFloatComponent,
    FloatValidatorDirective,
    JoinPipe,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    CanClickDirective
  ],
  providers: []
})
export class SharedModule { }
