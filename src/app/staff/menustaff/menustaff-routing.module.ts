import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenustaffPage } from './menustaff.page';
import {AccueilvendeurComponent} from "../components/accueilvendeur/accueilvendeur.component";
import {AccueilproprietaireComponent} from "../components/accueilproprietaire/accueilproprietaire.component";
import {ProfilDetailComponent} from "../components/profil-detail/profil-detail.component";

const routes: Routes = [
  {
    path: '',
    component: MenustaffPage,
    children:[
      {
        path: 'accueilvendeur',
        component: AccueilvendeurComponent,
      },
      {
        path: 'accueilproprietaire',
        component: AccueilproprietaireComponent,
      },
      {
        path: 'profil',
        component: ProfilDetailComponent,
      },
      {
        path: 'caisse',
        loadChildren: () => import('../components/caisse/caisse.module').then( m => m.CaissePageModule)
      },
      {
        path: 'apropos',
        loadChildren: () => import('../components/aboutus/aboutus.module').then( m => m.AboutusPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../components/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'vendeurs',
        loadChildren: () => import('../components/vendeurs/vendeurs.module').then( m => m.VendeursPageModule)
      },
      {
        path: 'boutique',
        loadChildren: () => import('../components/boutiques/boutiques.module').then( m => m.BoutiquesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenustaffPageRoutingModule {}
