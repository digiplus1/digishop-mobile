import {Component, OnInit} from '@angular/core';
import {CategorieBoutique} from "./Model/CategorieBoutique";
import {ProduitService} from "../../Service/ProduitService";
import {BoutiqueService} from "../../Service/BoutiqueService";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent implements OnInit {
  categories: CategorieBoutique[] = [
    new CategorieBoutique("Mode", "assets/img/mode.jpg"),
    new CategorieBoutique("Quincaillerie", "assets/img/quincaillerie.jpg"),
    new CategorieBoutique("Coiffure", "assets/img/coifure.jpg"),
  ]

  slideopts = {
    initialSilde: 0,
    spaceBetween: 0,
    slidesPerView: 2.8,
    slidesOffsetBefore: 6
  };

  constructor(public produitService:ProduitService,public boutiqueService:BoutiqueService) {
  }

  ngOnInit() {
    this.produitService.getAllproduit();
    this.produitService.getAllCategorie();
    this.boutiqueService.getAllboutique()
  }

}
