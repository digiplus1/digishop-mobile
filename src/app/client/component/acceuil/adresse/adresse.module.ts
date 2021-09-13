import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdresseComponent} from "./adresse.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [AdresseComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class AdresseModule { }
