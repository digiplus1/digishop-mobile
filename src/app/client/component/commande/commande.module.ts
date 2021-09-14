import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommandeComponent} from "./commande.component";
import {ModaldetailComponent} from "./modaldetail/modaldetail.component";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [CommandeComponent,ModaldetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],entryComponents:[ModaldetailComponent]
})
export class CommandeModule { }
