import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitsComponent} from "./produits.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [ProduitsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[ProduitsComponent]
})
export class ProduitsModule { }
