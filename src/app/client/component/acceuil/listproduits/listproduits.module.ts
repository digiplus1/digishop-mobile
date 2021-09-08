import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListproduitsComponent} from "./listproduits.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [ListproduitsComponent],
    imports: [
        CommonModule,
        IonicModule
    ],exports:[ListproduitsComponent]
})
export class ListproduitsModule { }
