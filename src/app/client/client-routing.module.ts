import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';
import {AcceuilComponent} from "./component/acceuil/acceuil.component";

const routes: Routes = [
  {
    path: '',
    component: ClientPage,
    children:[
      {
        path: 'panier',
        loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
      },

      {
        path:'',
        redirectTo:'panier',
        pathMatch:'full'
      },
    ]
  },
  {
    path: 'menuclient',
    loadChildren: () => import('./menuclient/menuclient.module').then( m => m.MenuclientPageModule)
  },
  {
    path: 'boutique',
    loadChildren: () => import('./boutique/boutique.module').then( m => m.BoutiquePageModule)
  },
  {
    path: 'detailproduits',
    loadChildren: () => import('./detailproduits/detailproduits.module').then( m => m.DetailproduitsPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
