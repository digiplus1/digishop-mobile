import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PayementComponent} from "./payement.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [PayementComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class PayementModule { }
