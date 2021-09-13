import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcommandePageRoutingModule } from './modalcommande-routing.module';

import { ModalcommandePage } from './modalcommande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcommandePageRoutingModule
  ],
  declarations: [ModalcommandePage]
})
export class ModalcommandePageModule {}
