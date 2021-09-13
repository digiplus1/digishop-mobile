import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitsCategorieComponent} from "./produits-categorie.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [ProduitsCategorieComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[ProduitsCategorieComponent]
})
export class ProduitsCategorieModule { }
