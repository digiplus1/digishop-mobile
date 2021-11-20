import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthenService} from "./home/components/Service/AuthenService";
import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotificationService} from "./shared/services/NotificationService";
import {MainService} from "./shared/services/MainService";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DatePipe} from '@angular/common';
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import {PrinterlistComponent} from "./staff/components/printerlist/printerlist.component";


const SERVICES = [
  MainService,
  NotificationService,
  BluetoothSerial,
]

@NgModule({
  declarations: [AppComponent, PrinterlistComponent],
  entryComponents: [],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthenService,
    DatePipe,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      SERVICES
    ],
  bootstrap: [AppComponent],

})
export class AppModule {}
