import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitslideComponent} from "./produitslide.component";
import {IonicModule} from "@ionic/angular";
import {ProduitsCategorieComponent} from "../produits-categorie/produits-categorie.component";



@NgModule({
  declarations: [ProduitslideComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[ProduitslideComponent]
})
export class ProduitslideModule { }
