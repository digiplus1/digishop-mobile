import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListboutiquesComponent} from "./listboutiques.component";



@NgModule({
  declarations: [ListboutiquesComponent],
  imports: [
    CommonModule
  ],exports:[ListboutiquesComponent]
})
export class ListboutiquesModule { }
