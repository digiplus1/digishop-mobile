import {Component, Input, OnInit} from '@angular/core';
import {ProduitDto} from "../../../../Model/ProduitDto";
import {ProduitService} from "../../../Service/ProduitService";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits-slide-header',
  templateUrl: './produits-slide-header.component.html',
  styleUrls: ['./produits-slide-header.component.scss'],
})
export class ProduitsSlideHeaderComponent {

  @Input() produits:ProduitDto[];
  slideopts = {
    initialSilde: 0,
    spaceBetween: 0,
    slidesPerView: 1.8,
    slidesOffsetBefore: 5
  };
  constructor(public produitService:ProduitService,public boutiqueService:BoutiqueService,public router:Router) {}



  goToDetail(p: ProduitDto) {
    this.produitService.produit=p;
    this.router.navigateByUrl("tabclient/client/detailproduits")
  }
}
