import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DashboardPageRoutingModule} from './dashboard-routing.module';

import {DashboardPage} from './dashboard.page';
import {AlertstockComponent} from "./components/alertstock/alertstock.component";
import {SessionOuvertComponent} from "./components/sessioncaisse/session-ouvert/session-ouvert.component";
import {SessionFermeComponent} from "./components/sessioncaisse/session-ferme/session-ferme.component";
import {SessioncaisseComponent} from "./components/sessioncaisse/sessioncaisse.component";
import {VentesdashboardComponent} from "./components/ventesdashboard/ventesdashboard.component";
import {AccueildashboardComponent} from "./components/accueildashboard/accueildashboard.component";
import {SessionOFilterComponent} from "./modals/session-ofilter/session-ofilter.component";
import {SessionFFilterComponent} from "./modals/session-ffilter/session-ffilter.component";
import {VenteFilterComponent} from "./modals/vente-filter/vente-filter.component";
import {RapportFermetureComponent} from "./modals/rapport-fermeture/rapport-fermeture.component";
import {VentesdashboardModule} from "./components/ventesdashboard/ventesdashboard.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ReactiveFormsModule,
    VentesdashboardModule,
  ],
  declarations: [DashboardPage,
    AlertstockComponent, SessionOuvertComponent, SessionFermeComponent, SessioncaisseComponent,
    VentesdashboardComponent, AccueildashboardComponent, SessionOFilterComponent, SessionFFilterComponent,
    VenteFilterComponent, RapportFermetureComponent]
})
export class DashboardPageModule {
}
