import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenustaffPageRoutingModule } from './menustaff-routing.module';

import { MenustaffPage } from './menustaff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenustaffPageRoutingModule
  ],
  declarations: [MenustaffPage]
})
export class MenustaffPageModule {}
