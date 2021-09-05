import {Component, Input} from '@angular/core';
import {ProduitDto} from "../../../../Model/ProduitDto";

@Component({
  selector: 'app-produits-categorie',
  templateUrl: './produits-categorie.component.html',
  styleUrls: ['./produits-categorie.component.scss'],
})
export class ProduitsCategorieComponent  {
  @Input() produit:ProduitDto;
}
