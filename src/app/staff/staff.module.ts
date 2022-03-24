import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StaffPageRoutingModule } from './staff-routing.module';

import { StaffPage } from './staff.page';
import {ServiceBanniere} from "./services/ServiceBanniere";
import {ServiceBoutique} from "./services/ServiceBoutique";
import {ServiceCaisse} from "./services/ServiceCaisse";
import {ServiceCatalogueCategorie} from "./services/ServiceCatalogueCategorie";
import {ServiceCommande} from "./services/ServiceCommande";
import {ServiceCoupon} from "./services/ServiceCoupon";
import {ServiceInventaire} from "./services/ServiceInventaire";
import {ServicePaiement} from "./services/ServicePaiement";
import {ServicePanier} from "./services/ServicePanier";
import {ServiceProduit} from "./services/ServiceProduit";
import {ServiceStock} from "./services/ServiceStock";
import {ServiceTransaction} from "./services/ServiceTransaction";
import {ServiceUtilisateur} from "./services/ServiceUtilisateur";
import {ServiceDash} from "./services/ServiceDash";
import {ServicePrinter} from "./services/ServicePrinter";
import {AccueilvendeurComponent} from "./components/accueilvendeur/accueilvendeur.component";
import {AccueilproprietaireComponent} from "./components/accueilproprietaire/accueilproprietaire.component";
import {ProfilDetailComponent} from "./components/profil-detail/profil-detail.component";
import {RapportFermetureCaisseBoutiqueComponent} from "./components/rapport-fermeture-caisse-boutique/rapport-fermeture-caisse-boutique.component";
import {DetailsRapportFermetureGlobalComponent} from "./components/rapport-fermeture-caisse-boutique/details-rapport-fermeture-global/details-rapport-fermeture-global.component";
import {CheckRapportComponent} from "./components/rapport-fermeture-caisse-boutique/check-rapport/check-rapport.component";

const SERVICES = [
  ServiceBanniere,
  ServiceBoutique,
  ServiceCaisse,
  ServiceCatalogueCategorie,
  ServiceCommande,
  ServiceCoupon,
  ServiceInventaire,
  ServicePaiement,
  ServicePanier,
  ServiceProduit,
  ServiceStock,
  ServiceTransaction,
  ServiceUtilisateur,
  ServiceDash,
  ServicePrinter,

]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StaffPageRoutingModule,
  ],
  declarations: [
    StaffPage,
    AccueilvendeurComponent,
    AccueilproprietaireComponent,
    ProfilDetailComponent,
    RapportFermetureCaisseBoutiqueComponent,
    DetailsRapportFermetureGlobalComponent,
    CheckRapportComponent
  ],
  providers: [
    SERVICES
  ]
})
export class StaffPageModule {}
