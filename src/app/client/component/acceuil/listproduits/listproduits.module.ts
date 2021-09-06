import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListproduitsComponent} from "./listproduits.component";



@NgModule({
  declarations: [ListproduitsComponent],
  imports: [
    CommonModule
  ],exports:[ListproduitsComponent]
})
export class ListproduitsModule { }
