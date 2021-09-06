import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ProduitService} from "../Service/ProduitService";
import {BoutiqueService} from "../Service/BoutiqueService";
import {ProduitDto} from "../../Model/ProduitDto";
import {CartService} from "../Service/CartService";

@Component({
  selector: 'app-detailproduits',
  templateUrl: './detailproduits.page.html',
  styleUrls: ['./detailproduits.page.scss'],
})
export class DetailproduitsPage implements OnInit {

  constructor(public authenService:AuthenService,public produitService:ProduitService,public cartService:CartService) { }

  ngOnInit() {
  }

  addToCart(produit: ProduitDto) {
    this.cartService.ajouter_panier(produit,1,"add");
  }
}
