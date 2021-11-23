import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoutiquesPage } from './boutiques.page';
import {AccueilboutiquesComponent} from "./components/accueilboutiques/accueilboutiques.component";
import {InventairelistModule} from "./components/inventairelist/inventairelist.module";

const routes: Routes = [
  {
    path: '',
    component: BoutiquesPage,
    children: [
      {path: 'accueil', component: AccueilboutiquesComponent}
    ]
  }
];

@NgModule({
  imports: [
    InventairelistModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class BoutiquesPageRoutingModule {}
