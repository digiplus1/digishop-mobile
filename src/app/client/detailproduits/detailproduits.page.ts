import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ProduitService} from "../Service/ProduitService";
import {BoutiqueService} from "../Service/BoutiqueService";
import {ProduitDto} from "../../Model/ProduitDto";
import {CartService} from "../Service/CartService";
import {Router} from "@angular/router";
import {FavoriteService} from "../Service/FavoriteService";
import {FavorisDTO} from "../../Model/FavorisDTO";
import {NatifService} from "../Service/NatifService";

@Component({
  selector: 'app-detailproduits',
  templateUrl: './detailproduits.page.html',
  styleUrls: ['./detailproduits.page.scss'],
})
export class DetailproduitsPage implements OnInit {
  slideopts = {
    initialSilde: 0,
    spaceBetween: 0,
    slidesPerView: 2.8,
    slidesOffsetBefore: 6
  };
  constructor(public authenService:AuthenService,public produitService:ProduitService,public favoriteService:FavoriteService,
              public cartService:CartService,public router:Router,public natifService:NatifService,) { }

  ngOnInit() {
  }



  addToCart(produit: ProduitDto) {
    this.cartService.ajouter_panier(produit,1,"add");
  }


  addfavoriteProduit(produit: ProduitDto) {
    let favorite:FavorisDTO=new FavorisDTO();
    favorite.nomboutique=produit.nomboutique;
    favorite.nomproduit=produit.nomProduit;
    favorite.action="add";
    favorite.nomclient=this.authenService.utilisateur.username;
    this.favoriteService.manageItemsToFavoris(favorite);
  }

}
