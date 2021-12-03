import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PayementComponent} from "./payement.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {ModalpayementclientComponent} from "./modalpayementclient/modalpayementclient.component";



@NgModule({
  declarations: [PayementComponent,ModalpayementclientComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class PayementModule { }
