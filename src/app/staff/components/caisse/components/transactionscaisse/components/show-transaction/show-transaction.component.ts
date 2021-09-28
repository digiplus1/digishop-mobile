import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {CaisseTransactions} from "../../../../../../models/CaisseTransactions";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.scss'],
})
export class ShowTransactionComponent implements OnInit {

  transaction : CaisseTransactions;

  constructor(public _navParamsService : NavParams,
              public _modalController: ModalController,
              public authenService : AuthenService) { }

  ngOnInit() {
    this.transaction = this._navParamsService.get('transaction');
  }

  dismiss() {
    this._modalController.dismiss();
  }

  print() {

  }
}
