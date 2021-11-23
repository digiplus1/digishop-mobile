import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommandeencoursComponent} from "./component/commandeencours/commandeencours.component";
import {CommandeterminerComponent} from "./component/commandeterminer/commandeterminer.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [CommandeencoursComponent,CommandeterminerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[CommandeencoursComponent,CommandeterminerComponent]
})
export class VentesdashboardModule { }
