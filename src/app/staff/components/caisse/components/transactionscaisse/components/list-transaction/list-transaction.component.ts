import {Component, Input, OnInit} from '@angular/core';
import {CaisseTransactions} from "../../../../../../models/CaisseTransactions";
import {ModalController} from "@ionic/angular";
import {ShowTransactionComponent} from "../show-transaction/show-transaction.component";

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.scss'],
})
export class ListTransactionComponent implements OnInit {

  @Input("transac") cashTransactions : CaisseTransactions[] = [];

  constructor(public modalController : ModalController) { }

  ngOnInit() {console.log(this.cashTransactions)}

  async showDetail(t: CaisseTransactions) {
    const modal = await this.modalController.create({
      component: ShowTransactionComponent,
      componentProps: {
        'transaction': t
      },
    });
    return await modal.present();
  }
}