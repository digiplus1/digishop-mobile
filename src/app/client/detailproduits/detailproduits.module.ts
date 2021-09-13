import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailproduitsPageRoutingModule } from './detailproduits-routing.module';

import { DetailproduitsPage } from './detailproduits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailproduitsPageRoutingModule
  ],
  declarations: [DetailproduitsPage]
})
export class DetailproduitsPageModule {}
