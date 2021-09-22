import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ProduitService} from "../Service/ProduitService";
import {BoutiqueService} from "../Service/BoutiqueService";
import {CartService} from "../Service/CartService";
import {ProduitDto} from "../../Model/ProduitDto";
import {IonSearchbar, IonSlides} from "@ionic/angular";
import {ProduitBoutique} from "../../Model/ProduitBoutique";
import {NatifService} from "../Service/NatifService";
import {BoutiquePos} from "../../Model/BoutiquePos";
import {FavorisDTO} from "../../Model/FavorisDTO";
import {FavoriteService} from "../Service/FavoriteService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.page.html',
  styleUrls: ['./boutique.page.scss'],
})
export class BoutiquePage implements OnInit {
  @ViewChild('search',{static:false}) search:IonSearchbar;
  @ViewChild('slider', { static: false }) slider: IonSlides;
  segment = 0;

  searcheItem:ProduitDto[];
   produits: ProduitDto[];
  is_disponibel: boolean;
  constructor(public authenService:AuthenService,public produitService:ProduitService,public boutiqueService:BoutiqueService,
              public cartService:CartService,public natifService:NatifService,public favoriteService:FavoriteService,public router:Router) { }

  ngOnInit() {
    this.produitService.getallproduitbyboutiqueIsactive(this.boutiqueService.boutique.nomBoutique).subscribe(
      data=>{

        data.content.forEach(p=>{
          if (!p.manageStock){
            p.is_add_cart=true;
          } else if (p.manageStock && p.quantiteEnStock>0){
            p.is_add_cart=true;
          } else {
            p.is_add_cart=false;
          }
          p.lien=p.nomboutique.replace(" ","")
        });
        this.produits=data.content;
        this.searcheItem=data.content;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }
  addToCart(produit: ProduitDto) {
    this.cartService.ajouter_panier(produit,1,"add");
  }

  _ionChange(even: any) {
    const val=even.target.value;
    this.searcheItem=this.produits;
    if (val && val.trim()!=''){
      this.is_disponibel=true;
      this.searcheItem=this.searcheItem.filter(item=>{
        return (item.nomProduit.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }else {
      this.is_disponibel=false;
      this.searcheItem=this.produits;
    }
  }

  getValuer(p: ProduitDto) {
    this.searcheItem=this.produits.filter(produit=>produit==p);
    this.is_disponibel=false;
  }

  segmentChanged(ev) {
    console.log('segment change', ev.target.value)
    this.slider.slideTo(ev.target.value)
  }
  slideChanged() {
    this.slider.getActiveIndex().then(index => {
      this.segment = index;
    });

  }


  addToFavoriteShop(boutique: BoutiquePos) {

    let favorite:FavorisDTO=new FavorisDTO();
    favorite.nomboutique=boutique.nomBoutique;
    favorite.action="add";
    favorite.nomclient=this.authenService.utilisateur.username;
    this.favoriteService.manageItemsToFavoris(favorite);
  }

  scanProduit() {
    this.natifService.scannerQrcode("produit")
  }
}
