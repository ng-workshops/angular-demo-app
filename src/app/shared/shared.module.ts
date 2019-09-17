import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CanClickDirective } from './directives/can-click.directive';
import { InputFloatComponent } from './input-float/input-float.component';
import { InputFloatDirective } from './input-float/input-float.directive';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { IntegerValidatorDirective } from './input-integer/integer.validator.directive';
import { HostElementService } from './modal/host/host-element.service';
import { ModalComponent } from './modal/modal.component';
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  declarations: [
    CanClickDirective,
    InputIntegerComponent,
    IntegerValidatorDirective,
    JoinPipe,
    ModalComponent,
    InputFloatDirective,
    InputFloatComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputIntegerComponent,
    IntegerValidatorDirective,
    InputFloatDirective,
    InputFloatComponent,
    JoinPipe,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressBarModule,
    MatTableModule,
    CanClickDirective
  ],
  providers: [HostElementService],
  entryComponents: [ModalComponent]
})
export class SharedModule {}
