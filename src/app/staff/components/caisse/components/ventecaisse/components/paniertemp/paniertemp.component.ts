import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ServicePanier} from "../../../../../../services/ServicePanier";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {PanierTemp} from "../../../../../../models/panierTemp";

@Component({
  selector: 'app-paniertemp',
  templateUrl: './paniertemp.component.html',
  styleUrls: ['./paniertemp.component.scss'],
})
export class PaniertempComponent implements OnInit {

  libelle : string = '';
  testaffiche : number;

  constructor(private modalController : ModalController, public servicePanier : ServicePanier,
              private authenService : AuthenService) { }

  ngOnInit() {
    if(this.servicePanier.panierCaisse.cartItems.length==0){
      this.testaffiche = 1;
    } else {
      this.testaffiche = 2;
    }
  }

  removeitem (v : PanierTemp) {
    let i = this.servicePanier.panierTempList.findIndex(p=>{
      return p.id==v.id;
    })
    if (i!=-1) {
      this.servicePanier.panierTempList.splice(i, 1);
    }
  }

  selectItem(v : PanierTemp){
    console.log(v)
    console.log(this.servicePanier.panierTempList)
    let i = this.servicePanier.panierTempList.findIndex(p=>{
      return p.id==v.id;
    })
    if(i!=-1){
      this.servicePanier.panierCaisse = v.panier;
      this.servicePanier.refreshPanier();
      this.removeitem(v);
      this.dismiss();
    }
    console.log(this.servicePanier.panierCaisse);
  }
  dismiss() {
    this.modalController.dismiss()
  }

  saveBrouillon() {
    console.log(this.servicePanier.panierCaisse)
    if(this.libelle==""){
      this.authenService.toastMessage("Vous devez entrer une valeur")
    } else {
      let temp : PanierTemp = new PanierTemp();
      this.servicePanier.index += 1;

      temp.id = this.servicePanier.index;
      temp.libelle = this.libelle + " : " + this.servicePanier.index;
      this.servicePanier.panierCaisse.cartItems.forEach(a=>{
          temp.panier.cartItems.push(a)
        });

      this.servicePanier.panierTempList.push(temp);
      this.servicePanier.clearPanierSansNotif();
      console.log(this.servicePanier.panierTempList)
      this.testaffiche=1;
    }
  }
}
