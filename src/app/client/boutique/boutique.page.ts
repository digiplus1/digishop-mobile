import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ProduitService} from "../Service/ProduitService";
import {BoutiqueService} from "../Service/BoutiqueService";

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.page.html',
  styleUrls: ['./boutique.page.scss'],
})
export class BoutiquePage implements OnInit {

  constructor(public authenService:AuthenService,public produitService:ProduitService,public boutiqueService:BoutiqueService) { }

  ngOnInit() {
    this.produitService.getallproduitbyboutiqueIsactive(this.boutiqueService.boutique.nomBoutique);

  }

}
