import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../Service/ProduitService";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {Router} from "@angular/router";
import {BoutiquePos} from "../../../../Model/BoutiquePos";

@Component({
  selector: 'app-listboutiques',
  templateUrl: './listboutiques.component.html',
  styleUrls: ['./listboutiques.component.scss'],
})
export class ListboutiquesComponent implements OnInit {

  constructor(public produitService:ProduitService,public boutiqueService:BoutiqueService,public router:Router) { }

  ngOnInit() {}

  goToShop(b: BoutiquePos) {
    this.boutiqueService.boutique=b;
    this.router.navigateByUrl("client/boutique")
  }
}
