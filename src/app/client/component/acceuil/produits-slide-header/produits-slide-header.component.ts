import {Component, Input, OnInit} from '@angular/core';
import {ProduitDto} from "../../../../Model/ProduitDto";

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
  constructor() { }


}
