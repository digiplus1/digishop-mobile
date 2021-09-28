import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeursPageRoutingModule } from './vendeurs-routing.module';

import { VendeursPage } from './vendeurs.page';
import {ListvendeurComponent} from "./components/listvendeur/listvendeur.component";
import {DetailvendeurComponent} from "./components/detailvendeur/detailvendeur.component";
import {AddvendeurComponent} from "./components/addvendeur/addvendeur.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeursPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VendeursPage, ListvendeurComponent, DetailvendeurComponent, AddvendeurComponent]
})
export class VendeursPageModule {}
