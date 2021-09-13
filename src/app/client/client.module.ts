import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import {NatifService} from "./Service/NatifService";
import { CallNumber } from '@ionic-native/call-number/ngx';
import {ProfilComponent} from "./component/profil/profil.component";
import {AproposComponent} from "./component/apropos/apropos.component";
import {CouponComponent} from "./component/coupon/coupon.component";
import {CommandeComponent} from "./component/commande/commande.component";
import {AcceuilComponent} from "./component/acceuil/acceuil.component";
import {AcceuilSlideHeaderModule} from "./component/acceuil/acceuil-slide-header/acceuil-slide-header.module";
import {CategorieShopModule} from "./component/acceuil/categorie-shop/categorie-shop.module";
import {ProduitsSlideHeaderModule} from "./component/acceuil/produits-slide-header/produits-slide-header.module";
import {ProduitsCategorieModule} from "./component/acceuil/produits-categorie/produits-categorie.module";
import {ProduitService} from "./Service/ProduitService";
import {HttpClientModule} from "@angular/common/http";
import {AcceuilModule} from "./component/acceuil/acceuil.module";
import {BoutiqueService} from "./Service/BoutiqueService";
import {CartService} from "./Service/CartService";
import {FavoriteService} from "./Service/FavoriteService";
import {CommandeClientService} from "./Service/CommandeClientService";
import {DigiXpresService} from "./Service/DigiXpresService";
import {CouponService} from "./Service/CouponService";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AcceuilModule,
    ClientPageRoutingModule,
  ],
  providers:[
    CallNumber,
    NatifService,
    ProduitService,
    BoutiqueService,
    CartService,
    FavoriteService,
    CommandeClientService,
    DigiXpresService,
    CouponService,
  ],
  declarations: [ClientPage,ProfilComponent,AproposComponent,CouponComponent,CommandeComponent]
})
export class ClientPageModule {}
