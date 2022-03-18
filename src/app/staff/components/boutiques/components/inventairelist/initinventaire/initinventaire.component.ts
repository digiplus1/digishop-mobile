import { Component, Input, OnInit } from '@angular/core';
import {InitiateInventaireDTO} from "../Model/InitiateInventaireDTO";
import {ServiceStock} from "../../../../../services/ServiceStock";
import {MainService} from "../../../../../../shared/services/MainService";
import {ServiceBoutique} from "../../../../../services/ServiceBoutique";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-initinventaire',
  templateUrl: './initinventaire.component.html',
  styleUrls: ['./initinventaire.component.scss'],
})
export class InitinventaireComponent implements OnInit {
  @Input() slider:IonSlides;
  isChecked = false;
  isCheckedAll = false;
  list_id_prod:number[]=[];
  inventaireInit:InitiateInventaireDTO=new InitiateInventaireDTO();
  constructor(public stockService:ServiceStock, private mainService : MainService,public authService: AuthenService,) { }

  ngOnInit() {
  }


  add_id(id: number) {
    if (this.list_id_prod.indexOf(id)==-1){
      this.list_id_prod.push(id);
    } else {
      let index=this.list_id_prod.findIndex(i=>{i==id});
      this.list_id_prod.splice(index,1);
    }

  }
  checkuncheckall() {
    this.isChecked=!this.isChecked;
    this.isCheckedAll=!this.isCheckedAll;
    this.list_id_prod=[];
    if (this.isChecked){

      this.stockService.produitInventaires.forEach(p=>{this.list_id_prod.push(p.idProduit)});
      console.log( this.list_id_prod)
    }
    console.log( this.list_id_prod)
  }

  initieInventaire(inventaireInit: InitiateInventaireDTO) {
    inventaireInit.idboutique=this.authService.boutique.idboutique;
    inventaireInit.idproduitlist=this.list_id_prod;
    inventaireInit.iduser=this.authService.utilisateur.iduser;

    this.mainService.spinner.show();
    this.stockService.initiateinventaire(this.inventaireInit).
    subscribe(data=>{
      this.mainService.spinner.hide();
      this.stockService.getInventaireByboutiqueInValidePage(this.authService.boutique.idboutique,0);
      this.slider.slideNext();
    },error => {
      this.mainService.spinner.hide();
      this.mainService.notificationService.showError(error.error.message)
      }
    )

  }
}
