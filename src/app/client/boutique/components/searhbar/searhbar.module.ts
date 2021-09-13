import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearhbarComponent} from "./searhbar.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [SearhbarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[SearhbarComponent]
})
export class SearhbarModule { }
