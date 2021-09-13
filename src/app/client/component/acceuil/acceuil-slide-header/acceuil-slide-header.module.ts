import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcceuilSlideHeaderComponent} from "./acceuil-slide-header.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [AcceuilSlideHeaderComponent],
  imports: [CommonModule, IonicModule],
  exports:[AcceuilSlideHeaderComponent]
})
export class AcceuilSlideHeaderModule { }
