import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CaissePage} from "../../caisse.page";
import {ConnexionclientComponent} from "./components/connexionclient/connexionclient.component";
import {CompteclientComponent} from "./compteclient.component";
import {BodycartComponent} from "./components/bodycart/bodycart.component";
import {RouterModule} from "@angular/router";
import {ModalpanierComponent} from "./components/modalpanier/modalpanier.component";



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [ConnexionclientComponent, CompteclientComponent,BodycartComponent,ModalpanierComponent]
})
export class CompteclientModule { }
