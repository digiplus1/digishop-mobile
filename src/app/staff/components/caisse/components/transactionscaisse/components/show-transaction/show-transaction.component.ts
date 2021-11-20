import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {CaisseTransactions} from "../../../../../../models/CaisseTransactions";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServicePrinter} from "../../../../../../services/ServicePrinter";

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.scss'],
})
export class ShowTransactionComponent implements OnInit {

  transaction : CaisseTransactions;

  constructor(public _navParamsService : NavParams,
              public _modalController: ModalController,
              private printer : ServicePrinter,
              public authenService : AuthenService) { }

  ngOnInit() {
    this.transaction = this._navParamsService.get('transaction');
  }

  dismiss() {
    this._modalController.dismiss();
  }

  print() {
    this.printer.sendToBluetoothPrinter(this.printer.selectedPrinter, this.printer.printVente);
  }
}
