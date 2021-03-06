import { NgModule } from '@angular/core';
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
import {QRScanner} from "@ionic-native/qr-scanner/ngx";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";

const SERVICES = [
  MainService,
  NotificationService,
]

@NgModule({
  declarations: [AppComponent],
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
    QRScanner,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      SERVICES
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
