import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BodyventesComponent} from "./components/bodyventes/bodyventes.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {VentescaisseComponent} from "./ventescaisse.component";
import {ModalpanierComponent} from "../compteclient/components/modalpanier/modalpanier.component";
import {ModalpaymentventeComponent} from "./components/modalpaymentvente/modalpaymentvente.component";
import {ModalpanierventeComponent} from "./components/modalpaniervente/modalpaniervente.component";



@NgModule({

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ] , declarations: [
    BodyventesComponent,
    VentescaisseComponent,
    ModalpanierventeComponent,
    ModalpaymentventeComponent
  ],
})
export class VentescaisseModule { }
