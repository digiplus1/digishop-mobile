import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuclientPage } from './menuclient.page';
import {AcceuilComponent} from "../component/acceuil/acceuil.component";
import {FavoriteComponent} from "../component/favorite/favorite.component";
import {CommandeComponent} from "../component/commande/commande.component";
import {HistoriqueComponent} from "../component/historique/historique.component";
import {CouponComponent} from "../component/coupon/coupon.component";
import {AproposComponent} from "../component/apropos/apropos.component";
import {ProfilComponent} from "../component/profil/profil.component";

const routes: Routes = [
  {
    path: '',
    component: MenuclientPage,
    children:[
      {
        path:'acceuil',
        component:AcceuilComponent
      },
      {
        path:'favorite',
        component:FavoriteComponent
      },
      {
        path:'commande',
        component:CommandeComponent
      },
      {
        path:'historique',
        component:HistoriqueComponent
      },
      {
        path:'coupon',
        component:CouponComponent
      }  ,
      {
        path:'apropos',
        component:AproposComponent
      },
      {
        path:'profil',
        component:ProfilComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuclientPageRoutingModule {}
