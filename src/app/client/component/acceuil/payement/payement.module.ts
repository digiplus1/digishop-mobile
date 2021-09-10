import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PayementComponent} from "./payement.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [PayementComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class PayementModule { }
