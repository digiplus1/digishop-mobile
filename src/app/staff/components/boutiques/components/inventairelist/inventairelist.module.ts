import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InitinventaireComponent} from "./initinventaire/initinventaire.component";
import {IonicModule} from "@ionic/angular";
import {ValidinventaireComponent} from "./validinventaire/validinventaire.component";
import {NonvalidinventaireComponent} from "./nonvalidinventaire/nonvalidinventaire.component";
import {FormsModule} from "@angular/forms";
import {InventaireterminerComponent} from "./inventaireterminer/inventaireterminer.component";



@NgModule({
  declarations: [InitinventaireComponent,ValidinventaireComponent,NonvalidinventaireComponent,InventaireterminerComponent],
  exports: [
    InitinventaireComponent,
    ValidinventaireComponent,
    NonvalidinventaireComponent,
    InventaireterminerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class InventairelistModule { }
