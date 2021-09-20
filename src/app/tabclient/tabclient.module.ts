import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabclientPageRoutingModule } from './tabclient-routing.module';

import { TabclientPage } from './tabclient.page';
import {CallNumber} from "@ionic-native/call-number/ngx";
import {NatifService} from "../client/Service/NatifService";
import {ProduitService} from "../client/Service/ProduitService";
import {BoutiqueService} from "../client/Service/BoutiqueService";
import {CartService} from "../client/Service/CartService";
import {FavoriteService} from "../client/Service/FavoriteService";
import {CommandeClientService} from "../client/Service/CommandeClientService";
import {DigiXpresService} from "../client/Service/DigiXpresService";
import {CouponService} from "../client/Service/CouponService";
import {AcceuilModule} from "../client/component/acceuil/acceuil.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilModule,
    TabclientPageRoutingModule
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
  declarations: [TabclientPage]
})
export class TabclientPageModule {}
