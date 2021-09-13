import {Component, Input, OnInit} from '@angular/core';
import {AuthenService} from "../../../../home/components/Service/AuthenService";
import {ProduitService} from "../../../Service/ProduitService";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {ProduitDto} from "../../../../Model/ProduitDto";
import {CartService} from "../../../Service/CartService";
import {Router} from "@angular/router";
import {FavorisDTO} from "../../../../Model/FavorisDTO";
import {FavoriteService} from "../../../Service/FavoriteService";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent implements OnInit {
@Input() produit:ProduitDto;
  constructor(public authenService:AuthenService,public produitService:ProduitService,public boutiqueService:BoutiqueService,
              public router:Router,public cartService:CartService,public favoriteService:FavoriteService) { }

  ngOnInit() {
  }
  addToCart(produit: ProduitDto) {
    this.cartService.ajouter_panier(produit,1,"add");
  }

  goToDetailProduit(p: ProduitDto) {
    this.produitService.produit=p;
    this.router.navigateByUrl("client/detailproduits")
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
