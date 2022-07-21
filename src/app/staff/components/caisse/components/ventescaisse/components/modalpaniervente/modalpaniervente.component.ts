import { Component, OnInit } from '@angular/core';
import {Cart} from "../../../../../../../Model/Cart";
import {ServiceProduit} from "../../../../../../services/ServiceProduit";
import {Router} from "@angular/router";
import {AlertController, ModalController, NavParams} from "@ionic/angular";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {CartItem} from "../../../../../../../Model/CartItem";
import {PaiementProccessComponent} from "../../../ventecaisse/components/paiement-proccess/paiement-proccess.component";
import {ServicePanier} from "../../../../../../services/ServicePanier";

@Component({
  selector: 'app-modalpaniervente',
  templateUrl: './modalpaniervente.component.html',
  styleUrls: ['./modalpaniervente.component.scss'],
})
export class ModalpanierventeComponent implements OnInit {
  cart:Cart;
  constructor(public serviceproduit : ServiceProduit, private router : Router,public alertCtrl:AlertController,
              public caisseService : ServiceCaisse, private navParam : NavParams,public panierService : ServicePanier,
              public authenService : AuthenService, public modalController : ModalController,) { }


  ngOnInit() {
    this.cart = this.navParam.get("panier");
  }


  async remove_qty(c:CartItem) {
    if(c.produit.nomProduit.toLowerCase().indexOf("generique")>-1){
      this.authenService.toastMessage("Impossible de réduire la quantité")
    } else {
      this.panierService.updateQuantite(c.produit, -1)
    }
  }
  ajouter(c: CartItem) {
    if(c.produit.nomProduit.toLowerCase().indexOf("generique")>-1){
      this.authenService.toastMessage("Impossible d'ajouter la quantité")
    } else {
      this.panierService.updateQuantite(c.produit, 1)
    }
  }
  async delete_round(c: CartItem) {
    const alert=await this.alertCtrl.create({
      header:'Supprimer',
      message:'êtes-vous sûr de vouloir Supprimer?',
      buttons:[
        {
          text:'OUI',
          handler:()=>  this.panierService.deleteItem(c)
        },
        {
          text:'NON'
        }
      ]
    });
    alert.present();
  }


  clearPanier() {
    this.panierService.clearPanier();
    this.modalController.dismiss();
  }

  async payer() {
    if(this.cart.cartItems.length>0){
      const modal = await this.modalController.create({
        component: PaiementProccessComponent,
        componentProps:{
          'panier':this.cart
        }
      });
      this.cancel();
      return await modal.present();
    } else {
      this.authenService.toastMessage("Aucun article ajouté.")
    }
  }

  cancel() {
    this.modalController.dismiss();
  }
}
