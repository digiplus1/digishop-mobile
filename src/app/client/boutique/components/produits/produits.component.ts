import {Component, Input, OnInit} from '@angular/core';
import {AuthenService} from "../../../../home/components/Service/AuthenService";
import {ProduitService} from "../../../Service/ProduitService";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {ProduitDto} from "../../../../Model/ProduitDto";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent implements OnInit {
@Input() produit:ProduitDto;
  constructor(public authenService:AuthenService,public produitService:ProduitService,public boutiqueService:BoutiqueService) { }

  ngOnInit() {
  }

}
