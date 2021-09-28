import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import {AlertstockComponent} from "./components/alertstock/alertstock.component";
import {SessionOuverte} from "./models/SessionOuverte";
import {SessionFermeComponent} from "./components/sessioncaisse/session-ferme/session-ferme.component";
import {AccueildashboardComponent} from "./components/accueildashboard/accueildashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      { path: 'accueildash', component: AccueildashboardComponent,},
      { path: 'alertstock', component: AlertstockComponent,},
      { path: 'sessionouverte', component: SessionOuverte,},
      { path: 'sessionfermee', component: SessionFermeComponent,},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
