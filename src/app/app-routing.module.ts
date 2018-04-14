import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CanDeactivateGuard } from './core/can-deactivate/can-deactivate-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [CanDeactivateGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
