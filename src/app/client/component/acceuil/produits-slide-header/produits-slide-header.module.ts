import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitsSlideHeaderComponent} from "./produits-slide-header.component";
import {IonicModule} from "@ionic/angular";
import {ProduitsCategorieModule} from "../produits-categorie/produits-categorie.module";



@NgModule({
  declarations: [ProduitsSlideHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    ProduitsCategorieModule
  ],
  exports:[ProduitsSlideHeaderComponent]
})
export class ProduitsSlideHeaderModule { }
