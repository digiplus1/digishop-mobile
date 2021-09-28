import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeursPage } from './vendeurs.page';
import {ListvendeurComponent} from "./components/listvendeur/listvendeur.component";

const routes: Routes = [
  {
    path: '',
    component: VendeursPage,
    children: [
      {path: 'list-vendeurs', component: ListvendeurComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeursPageRoutingModule {}
