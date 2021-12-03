import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcceuilComponent} from "./acceuil.component";
import {IonicModule} from "@ionic/angular";
import {AcceuilSlideHeaderModule} from "./acceuil-slide-header/acceuil-slide-header.module";
import {CategorieShopModule} from "./categorie-shop/categorie-shop.module";
import {ProduitsSlideHeaderModule} from "./produits-slide-header/produits-slide-header.module";
import {ProduitsCategorieModule} from "./produits-categorie/produits-categorie.module";
import {ProduitslideModule} from "./produitslide/produitslide.module";
import {BoutiqueslideComponent} from "./boutiqueslide/boutiqueslide.component";
import {ListproduitsModule} from "./listproduits/listproduits.module";
import {ListboutiquesModule} from "./listboutiques/listboutiques.module";
import {ProduitboutiqueModule} from "./produitboutique/produitboutique.module";
import {PayementModule} from "./payement/payement.module";
import {AdresseModule} from "./adresse/adresse.module";
import {FactureModule} from "../facture/facture.module";
import {CommandeModule} from "../commande/commande.module";



@NgModule({
  declarations: [AcceuilComponent, BoutiqueslideComponent],
  imports: [
    CommonModule,
    IonicModule,
    AcceuilSlideHeaderModule,
    CategorieShopModule,
    ProduitsSlideHeaderModule,
    ProduitsCategorieModule,
    ProduitslideModule,
    ListproduitsModule,
    ListboutiquesModule,
    ProduitboutiqueModule,
    PayementModule,
    AdresseModule,
    FactureModule,
    CommandeModule,
  ],exports:[AcceuilComponent]
})
export class AcceuilModule { }
