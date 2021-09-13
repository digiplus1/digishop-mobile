import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../Service/ProduitService";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {Router} from "@angular/router";
import {ProduitDto} from "../../../../Model/ProduitDto";

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.scss'],
})
export class ListproduitsComponent implements OnInit {

  constructor(public produitService:ProduitService,public boutiqueService:BoutiqueService,public router:Router) { }

  ngOnInit() {}

  goToDetailProduit(p: ProduitDto) {
    this.produitService.produit=p;
    this.router.navigateByUrl("client/detailproduits")
  }
}
