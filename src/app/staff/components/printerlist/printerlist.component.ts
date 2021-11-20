import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ServicePrinter} from "../../services/ServicePrinter";
import {MainService} from "../../../shared/services/MainService";

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
    localStorage.setItem("printer", macAddress);
    this.printeService.connectToBluetoothPrinter(macAddress);
    this.mainService.notificationService.showSuccess("Connexion à l'équipement "+ macAddress +" effectué avec succès.")
  }

  refreshList() {
    this.printeService.searchBluetoothPrinter()
      .then(resp => {
        //List of bluetooth device list
        this.printeService.bluetoothList = resp;
      });
    if(this.printeService.bluetoothList.length>=1){
      this.mainService.notificationService.showSuccess("Actualisation effectuée")
    } else {
      this.mainService.notificationService.showError("Rééssayer...")
    }
  }

}
