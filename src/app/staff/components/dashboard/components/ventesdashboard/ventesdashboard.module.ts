import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommandeencoursComponent} from "./component/commandeencours/commandeencours.component";
import {CommandeterminerComponent} from "./component/commandeterminer/commandeterminer.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [CommandeencoursComponent,CommandeterminerComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],exports:[CommandeencoursComponent,CommandeterminerComponent]
})
export class VentesdashboardModule { }
