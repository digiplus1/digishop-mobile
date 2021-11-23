import { Component, OnInit } from '@angular/core';
import {ServiceStock} from "../../../../../services/ServiceStock";
import {MainService} from "../../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";

@Component({
  selector: 'app-inventaireterminer',
  templateUrl: './inventaireterminer.component.html',
  styleUrls: ['./inventaireterminer.component.scss'],
})
export class InventaireterminerComponent implements OnInit {

  constructor(public stockService:ServiceStock, private mainService : MainService,public authService: AuthenService,) { }

  ngOnInit() {
    this.getAllInventaireValide();
  }

  getAllInventaireValide() {
    this.stockService.getInventaireByboutiqueValidePage(this.authService.boutique.idBoutique);

  }
}
