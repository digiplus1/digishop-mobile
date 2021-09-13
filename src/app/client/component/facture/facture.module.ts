import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FactureComponent} from "./facture.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [FactureComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class FactureModule { }
