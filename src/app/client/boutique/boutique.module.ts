import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoutiquePageRoutingModule } from './boutique-routing.module';

import { BoutiquePage } from './boutique.page';
import {SearhbarModule} from "./components/searhbar/searhbar.module";
import {ProduitsModule} from "./components/produits/produits.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoutiquePageRoutingModule,
    SearhbarModule,
    ProduitsModule
  ],
  declarations: [BoutiquePage]
})
export class BoutiquePageModule {}
