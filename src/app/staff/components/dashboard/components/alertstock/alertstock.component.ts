import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {MainService} from "../../../../../shared/services/MainService";
import {StockAlert} from "../../models/StockAlert";

@Component({
  selector: 'app-alertstock',
  templateUrl: './alertstock.component.html',
  styleUrls: ['./alertstock.component.scss'],
})
export class AlertstockComponent implements OnInit {

  constructor(public serviceDash : ServiceDash, private authenService : AuthenService,
              private mainService : MainService) { }

  ngOnInit() {
    this.serviceDash.testFilter = 0;
    this.serviceDash.testSegmentCaisse = false;
    this.mainService.spinner.show();

    let stockA : StockAlert = new StockAlert();
    stockA.nomuser = this.authenService.utilisateur.username;
    stockA.nomboutique = this.authenService.utilisateur.nomBoutique;

    this.serviceDash.checkAlertStockInShop(stockA).subscribe(
      data=>{
        console.log(data);
        this.serviceDash.stockAlertList = data;
        this.mainService.spinner.hide()
      }, error => {
        this.mainService.spinner.hide();
        this.authenService.toastMessage(error.error.message)
      }
    )
  }

}
