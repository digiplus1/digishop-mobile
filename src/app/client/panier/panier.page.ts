import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ProduitService} from "../Service/ProduitService";
import {CartService} from "../Service/CartService";
import {ProduitDto} from "../../Model/ProduitDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  constructor(public authenService:AuthenService,public produitService:ProduitService,public cartService:CartService,public router:Router) { }

  ngOnInit() {
  }

  ajouter(produit: ProduitDto) {
    this.cartService.ajouter_panier(produit,1,"add");
  }
  remove_qty(p:ProduitDto) {
    this.cartService.ajouter_panier(p,1,"remove");
    if (this.authenService.utilisateur.cart.cartItems.length==0){
      this.router.navigateByUrl("client/menuclient/acceuil");
    }
  }
}
