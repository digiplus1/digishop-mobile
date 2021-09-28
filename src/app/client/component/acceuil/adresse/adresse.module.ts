import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdresseComponent} from "./adresse.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [AdresseComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ]
})
export class AdresseModule { }
