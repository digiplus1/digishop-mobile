import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';
import {AcceuilComponent} from "./component/acceuil/acceuil.component";
import {ProfilComponent} from "./component/profil/profil.component";
import {ListboutiquesComponent} from "./component/acceuil/listboutiques/listboutiques.component";
import {ListproduitsComponent} from "./component/acceuil/listproduits/listproduits.component";
import {ProduitboutiqueComponent} from "./component/acceuil/produitboutique/produitboutique.component";
import {AdresseComponent} from "./component/acceuil/adresse/adresse.component";
import {PayementComponent} from "./component/acceuil/payement/payement.component";
import {FactureComponent} from "./component/facture/facture.component";

const routes: Routes = [
  {
    path: '',
    component: ClientPage

  },
  {
    path: 'panier',
    loadChildren: () => import('./panier/panier.module').then( m => m.PanierPageModule)
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
  {
    path: 'resultat/:mot',
    component:ProduitboutiqueComponent,
  },
  {
    path:'boutiques',
    component:ListboutiquesComponent
  },
  {
    path:'produits',
    component:ListproduitsComponent
  },
  {
    path:'adresse',
    component:AdresseComponent
  },
  {
    path:'payement',
    component:PayementComponent
  },
  {
    path:'facture',
    component:FactureComponent
  },
  {
    path: 'modalcommande',
    loadChildren: () => import('./component/commande/modalcommande/modalcommande.module').then( m => m.ModalcommandePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
