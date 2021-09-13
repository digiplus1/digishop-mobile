import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategorieShopComponent} from "./categorie-shop.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [CategorieShopComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[CategorieShopComponent]
})
export class CategorieShopModule { }
