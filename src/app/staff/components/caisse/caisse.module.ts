import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CaissePageRoutingModule } from './caisse-routing.module';

import { CaissePage } from './caisse.page';
import {AccueilcaisseComponent} from "./components/accueilcaisse/accueilcaisse.component";
import {ClientcommandeComponent} from "./components/clientcommande/clientcommande.component";
import {EntreecaisseComponent} from "./components/entreecaisse/entreecaisse.component";
import {FermeturecaisseComponent} from "./components/fermeturecaisse/fermeturecaisse.component";
import {OuverturecaisseComponent} from "./components/ouverturecaisse/ouverturecaisse.component";
import {SortiecaisseComponent} from "./components/sortiecaisse/sortiecaisse.component";
import {TransactionscaisseComponent} from "./components/transactionscaisse/transactionscaisse.component";
import {VentecaisseComponent} from "./components/ventecaisse/ventecaisse.component";
import {RapportcaisseComponent} from "./components/fermeturecaisse/modal/rapportcaisse/rapportcaisse.component";
import {ListTransactionComponent} from "./components/transactionscaisse/components/list-transaction/list-transaction.component";
import {PaniercaisseComponent} from "./components/ventecaisse/components/paniercaisse/paniercaisse.component";
import {PaniertempComponent} from "./components/ventecaisse/components/paniertemp/paniertemp.component";
import {PaiementProccessComponent} from "./components/ventecaisse/components/paiement-proccess/paiement-proccess.component";
import {GeneriqueComponent} from "./components/ventecaisse/components/generique/generique.component";
import {DetailsCommandeComponent} from "./components/clientcommande/components/details-commande/details-commande.component";
import {VenterapidecaisseComponent} from "./components/venterapidecaisse/venterapidecaisse.component";
import {CompteclientModule} from "./components/compteclient/compteclient.module";
import {VentescaisseModule} from "./components/ventescaisse/ventescaisse.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaissePageRoutingModule,
    ReactiveFormsModule,
    CompteclientModule,
    VentescaisseModule,
  ],
    declarations: [CaissePage,
        AccueilcaisseComponent, ClientcommandeComponent, EntreecaisseComponent,
        FermeturecaisseComponent, OuverturecaisseComponent, SortiecaisseComponent, TransactionscaisseComponent,
        VentecaisseComponent, RapportcaisseComponent, ListTransactionComponent, PaniercaisseComponent,
        PaniertempComponent, PaiementProccessComponent, GeneriqueComponent, DetailsCommandeComponent, VenterapidecaisseComponent
    ]
})
export class CaissePageModule {}
