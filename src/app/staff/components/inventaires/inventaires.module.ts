import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventairesPageRoutingModule } from './inventaires-routing.module';

import { InventairesPage } from './inventaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventairesPageRoutingModule
  ],
  declarations: [InventairesPage]
})
export class InventairesPageModule {}
