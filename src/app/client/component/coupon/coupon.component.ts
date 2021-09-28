import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {CouponService} from "../../Service/CouponService";
import {CartService} from "../../Service/CartService";
import {ProduitService} from "../../Service/ProduitService";
import {BoutiqueService} from "../../Service/BoutiqueService";
import {NatifService} from "../../Service/NatifService";
import {FavoriteService} from "../../Service/FavoriteService";
import {ProduitDto} from "../../../Model/ProduitDto";

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  code_coupon: String;
  constructor(public produitService:ProduitService,public boutiqueService:BoutiqueService,public router:Router,
              public authenService:AuthenService,public natifService:NatifService,public favoriteService:FavoriteService,public couponclientService:CouponService,public cartService:CartService) { }

  ngOnInit() {}


  addCart(p: ProduitDto) {
    this.cartService.ajouter_panier(p,1,"add");
  }

  goToDetail(p: ProduitDto) {
    this.produitService.produit=p;
    this.router.navigateByUrl("client/detailproduits")
  }
}
