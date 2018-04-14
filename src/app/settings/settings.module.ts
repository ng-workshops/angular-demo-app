import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsResolver } from './settings.resolver';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [
    SettingsRoutingModule,
    SharedModule
  ],
  declarations: [SettingsComponent],
  providers: [
    SettingsResolver,
    AuthGuard
  ]
})
export class SettingsModule { }
