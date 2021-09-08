import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitboutiqueComponent} from "./produitboutique.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {ProduitsModule} from "../../../boutique/components/produits/produits.module";
import {BoutiquePageModule} from "../../../boutique/boutique.module";
import {ListboutiquesModule} from "../listboutiques/listboutiques.module";
import {ListproduitsModule} from "../listproduits/listproduits.module";



@NgModule({
  declarations: [ProduitboutiqueComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ProduitsModule,
    BoutiquePageModule,
    ListboutiquesModule,
    ListproduitsModule
  ],
  exports:[ProduitboutiqueComponent]
})
export class ProduitboutiqueModule { }
