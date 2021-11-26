import { Component, OnInit } from '@angular/core';
import {ServiceProduit} from "../../../../../../services/ServiceProduit";
import {Router} from "@angular/router";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {CartService} from "../../../../../../../client/Service/CartService";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {MainService} from "../../../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {AlertController, ModalController} from "@ionic/angular";
import {CartItem} from "../../../../../../../Model/CartItem";
import {PaiementProccessComponent} from "../../../ventecaisse/components/paiement-proccess/paiement-proccess.component";

@Component({
  selector: 'app-modalpanier',
  templateUrl: './modalpanier.component.html',
  styleUrls: ['./modalpanier.component.scss'],
})
export class ModalpanierComponent implements OnInit {

  constructor(public serviceproduit : ServiceProduit, private router : Router,public alertCtrl:AlertController,
              public caisseService : ServiceCaisse, private mainService : MainService,public authenService : AuthenService, public modalController : ModalController,) { }


  ngOnInit() {}


  async remove_qty(c:CartItem) {
    if (c.quantite==1){
      const alert=await this.alertCtrl.create({
        header:'Supprimer',
        message:'êtes-vous sûr de vouloir Supprimer '+c.description+' ?',
        buttons:[
          {
            text:'OUI',
            handler:()=>  this.caisseService.ajouter_panierClient(c.produit,1,"remove")
          },
          {
            text:'NON'
          }
        ]
      });
      alert.present();
    }else {
      this.caisseService.ajouter_panierClient(c.produit,1,"remove")
    }

  }
  ajouter(c: CartItem) {
    this.caisseService.ajouter_panierClient(c.produit,1,"add");
  }
  async delete_round(c: CartItem) {
    const alert=await this.alertCtrl.create({
      header:'Supprimer',
      message:'êtes-vous sûr de vouloir Supprimer?',
      buttons:[
        {
          text:'OUI',
          handler:()=>  this.caisseService.ajouter_panierClient(c.produit,c.quantite,"delete")
        },
        {
          text:'NON'
        }
      ]
    });
    alert.present();
  }


  clearPanier() {
    this.authenService.user_vendeur.cart.cartItems=[];
  }

  async payer() {
    if(this.authenService.user_vendeur.cart.cartItems.length>0){
      const modal = await this.modalController.create({
        component: PaiementProccessComponent,
      });
      return await modal.present();
    } else {
      this.authenService.toastMessage("Aucun article ajouté.")
    }
  }

  cancel() {
    this.modalController.dismiss()
  }
}
