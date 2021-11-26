import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ProduitService} from "../Service/ProduitService";
import {CartService} from "../Service/CartService";
import {ProduitDto} from "../../Model/ProduitDto";
import {Router} from "@angular/router";
import {CartItem} from "../../Model/CartItem";
import {AlertController} from "@ionic/angular";
import {BoutiqueService} from "../Service/BoutiqueService";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  is_loading:boolean;
  constructor(public authenService:AuthenService,public produitService:ProduitService,public boutiqueService:BoutiqueService,
              public cartService:CartService,public router:Router,public alertCtrl:AlertController) { }

  ngOnInit() {
  }


  async remove_qty(c:CartItem) {
    if (c.quantite==1){
      const alert=await this.alertCtrl.create({
        header:'Supprimer',
        message:'êtes-vous sûr de vouloir Supprimer '+c.description+' ?',
        buttons:[
          {
            text:'OUI',
            handler:()=>  this.cartService.ajouter_panier(c.produit,1,"remove")
          },
          {
            text:'NON'
          }
        ]
      });
      alert.present();
    }else {
      this.cartService.ajouter_panier(c.produit,1,"remove")
    }

  }
  ajouter(c: CartItem) {
    this.cartService.ajouter_panier(c.produit,1,"add");
  }
  async delete_round(c: CartItem) {
    const alert=await this.alertCtrl.create({
      header:'Supprimer',
      message:'êtes-vous sûr de vouloir Supprimer?',
      buttons:[
        {
          text:'OUI',
          handler:()=>  this.cartService.ajouter_panier(c.produit,c.quantite,"delete")
        },
        {
          text:'NON'
        }
      ]
    });
    alert.present();
  }

  goToAdresse() {
    this.is_loading=true;
    this.cartService.getPanier(this.authenService.utilisateur.cart.idcart).subscribe(
      data=>{

        this.authenService.utilisateur.cart=data;
        this.boutiqueService.getBoutiqueByName(this.authenService.utilisateur.cart.cartItems[0].produit.nomboutique).subscribe(
          data=>{
            this.is_loading=false;
            this.boutiqueService.boutique=data;
            this.router.navigateByUrl("client/adresse")
          },error => {
            this.is_loading=false;
            this.authenService.toastMessage(error.error.message);
          }
        );

        this.authenService.saveToken()

      },error => {
        this.is_loading=false;
        this.authenService.toastMessage(error.error.message);
      }
    )
  }
}
