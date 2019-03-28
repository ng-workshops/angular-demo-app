import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTableModule
} from '@angular/material';
import { CanClickDirective } from './directives/can-click.directive';
import { FloatValidatorDirective } from './input-float/float.validator.directive';
import { InputFloatComponent } from './input-float/input-float.component';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  imports: [CommonModule, MatInputModule, FormsModule],
  declarations: [CanClickDirective, InputFloatComponent, FloatValidatorDirective, JoinPipe],
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
    MatTableModule,
    CanClickDirective
  ],
  providers: []
})
export class SharedModule {}
