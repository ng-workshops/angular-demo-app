import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { InfoItemComponent } from './info-item/info-item.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule, MatCardModule],
  declarations: [HomeComponent, InfoItemComponent, InfoBoxComponent]
})
export class HomeModule {}
