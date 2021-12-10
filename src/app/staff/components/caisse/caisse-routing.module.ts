import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaissePage } from './caisse.page';
import {ClientcommandeComponent} from "./components/clientcommande/clientcommande.component";
import {EntreecaisseComponent} from "./components/entreecaisse/entreecaisse.component";
import {FermeturecaisseComponent} from "./components/fermeturecaisse/fermeturecaisse.component";
import {OuverturecaisseComponent} from "./components/ouverturecaisse/ouverturecaisse.component";
import {SortiecaisseComponent} from "./components/sortiecaisse/sortiecaisse.component";
import {TransactionscaisseComponent} from "./components/transactionscaisse/transactionscaisse.component";
import {VenterapidecaisseComponent} from "./components/venterapidecaisse/venterapidecaisse.component";
import {AccueilcaisseComponent} from "./components/accueilcaisse/accueilcaisse.component";
import {CompteclientComponent} from "./components/compteclient/compteclient.component";
import {ConnexionclientComponent} from "./components/compteclient/components/connexionclient/connexionclient.component";
import {BodycartComponent} from "./components/compteclient/components/bodycart/bodycart.component";
import {VentescaisseComponent} from "./components/ventescaisse/ventescaisse.component";
import {BodyventesComponent} from "./components/ventescaisse/components/bodyventes/bodyventes.component";

const routes: Routes = [
  {
    path: '',
    component: CaissePage,
    children: [
      { path: 'accueil', component: AccueilcaisseComponent,},
      {
        path: 'client',
        component: CompteclientComponent,
        children:[
          {path:'connexion',component:ConnexionclientComponent},
          {path:'bodycart',component:BodycartComponent}
        ]

      },
      { path: 'commandeclient', component: ClientcommandeComponent,},
      { path: 'entreecaisse', component:EntreecaisseComponent,},
      { path: 'fermeturecaisse', component: FermeturecaisseComponent,},
      { path: 'ouverturecaisse', component: OuverturecaisseComponent,},
      { path: 'sortiecaisse', component: SortiecaisseComponent,},
      { path: 'transactionscaisse', component: TransactionscaisseComponent,},
      {
        path: 'ventecaisse',
        component: VentescaisseComponent,
        children:[
          {path: 'body',component: BodyventesComponent}
        ]
      },
      { path: 'ventecaisserapide', component: VenterapidecaisseComponent,},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaissePageRoutingModule {}
