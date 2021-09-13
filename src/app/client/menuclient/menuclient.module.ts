import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuclientPageRoutingModule } from './menuclient-routing.module';

import { MenuclientPage } from './menuclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuclientPageRoutingModule
  ],
  declarations: [MenuclientPage]
})
export class MenuclientPageModule {}
