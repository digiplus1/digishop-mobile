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
    this.stockService.getInventaireByboutiqueValidePage(this.authService.boutique.idboutique);

  }
  findByInventaireid(idInventaire:number, index: number) {
    if (!this.stockService.inventaireValidePage.content[index].is_unroll) {
      this.mainService.spinner.show();
      this.stockService.findByInventaireid(idInventaire).subscribe(
        data=>{
          this.mainService.spinner.hide();
          this.stockService.inventaireValidePage.content[index].inventaireItemList=data;
          this.stockService.inventaireValidePage.content[index].is_unroll = true;
        },error => {
          this.mainService.spinner.hide();
        }
      )
    } else {
      this.stockService.inventaireValidePage.content[index].is_unroll = false;
    }

  }
}
