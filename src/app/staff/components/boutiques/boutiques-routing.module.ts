import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoutiquesPage } from './boutiques.page';
import {AccueilboutiquesComponent} from "./components/accueilboutiques/accueilboutiques.component";

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoutiquesPageRoutingModule {}
