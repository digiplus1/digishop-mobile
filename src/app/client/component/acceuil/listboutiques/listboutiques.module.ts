import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListboutiquesComponent} from "./listboutiques.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [ListboutiquesComponent],
    imports: [
        CommonModule,
        IonicModule
    ],exports:[ListboutiquesComponent]
})
export class ListboutiquesModule { }
