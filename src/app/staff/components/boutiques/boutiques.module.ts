import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoutiquesPageRoutingModule } from './boutiques-routing.module';

import { BoutiquesPage } from './boutiques.page';
import {AccueilboutiquesComponent} from "./components/accueilboutiques/accueilboutiques.component";
import {InventairelistComponent} from "./components/inventairelist/inventairelist.component";
import {ManagestockComponent} from "./components/managestock/managestock.component";
import {OperationstockComponent} from "./components/operationstock/operationstock.component";
import {ProduitlistComponent} from "./components/produitlist/produitlist.component";
import {TransactionstockComponent} from "./components/transactionstock/transactionstock.component";
import {DetailsproduitComponent} from "./components/produitlist/detailsproduit/detailsproduit.component";
import {AddproduitComponent} from "./components/produitlist/addproduit/addproduit.component";
import {RemoveStockComponent} from "./components/managestock/remove-stock/remove-stock.component";
import {InventairelistModule} from "./components/inventairelist/inventairelist.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BoutiquesPageRoutingModule,
        ReactiveFormsModule,
        InventairelistModule
    ],
  declarations: [BoutiquesPage, AccueilboutiquesComponent, InventairelistComponent, ManagestockComponent, OperationstockComponent,
                  ProduitlistComponent, TransactionstockComponent, DetailsproduitComponent, AddproduitComponent, RemoveStockComponent]
})
export class BoutiquesPageModule {}
