import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {IonSlides} from "@ionic/angular";
import {FavoriteService} from "../../Service/FavoriteService";
import {ProduitService} from "../../Service/ProduitService";
import {ProduitDto} from "../../../Model/ProduitDto";
import {BoutiquePos} from "../../../Model/BoutiquePos";
import {BoutiqueService} from "../../Service/BoutiqueService";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  @ViewChild('slider', { static: false }) slider: IonSlides;
  segment = 0;

  constructor(public authenservice: AuthenService,public router:Router,public favoriteService:FavoriteService,
              public produitService:ProduitService,public boutiqueService:BoutiqueService) { }

  ngOnInit() {}


  detail(p: ProduitDto) {
    this.produitService.produit=p;
    this.router.navigateByUrl("client/detailproduits")
  }


  gotoshope(b: BoutiquePos) {
    this.boutiqueService.boutique=b;
    this.router.navigateByUrl("client/boutique")
  }
  delectFavorite(produitDto: ProduitDto, boutique: BoutiquePos){
    this.favoriteService.deleteFavorite(produitDto,boutique);
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
}
