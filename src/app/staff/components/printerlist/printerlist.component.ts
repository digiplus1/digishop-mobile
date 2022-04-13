import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ServicePrinter} from "../../services/ServicePrinter";
import {MainService} from "../../../shared/services/MainService";
import {error} from "protractor";

@Component({
  selector: 'app-printerlist',
  templateUrl: './printerlist.component.html',
  styleUrls: ['./printerlist.component.scss'],
})
export class PrinterlistComponent implements OnInit {

  constructor(public _modalController: ModalController,
              public printeService : ServicePrinter,
              public mainService : MainService) { }

  ngOnInit() {
    this.listPrinter();
  }

  dismiss() {
    this._modalController.dismiss();
  }

  listPrinter() {
    this.printeService.searchBluetoothPrinter()
      .then(resp => {
        //List of bluetooth device list
        this.printeService.bluetoothList = resp;
      });
  }

  //This will store selected bluetooth device mac address
  selectPrinter(macAddress) {
    //Selected printer macAddress stored here
    this.printeService.selectedPrinter = macAddress;
    this.printeService.storage.set("printer", macAddress);
    this.printeService.connectToBluetoothPrinter(macAddress);
    this.mainService.notificationService.showSuccess("Connexion à l'équipement "+ macAddress +" effectué avec succès.")
  }

  refreshList() {
    this.printeService.searchBluetoothPrinter()
      .then(resp => {
        //List of bluetooth device list
        this.printeService.bluetoothList = resp;
        this.mainService.notificationService.showSuccess("Actualisation effectuée")
      }).catch(
        error=> this.mainService.notificationService.showError("Rééssayer...")
    );
  }

}
