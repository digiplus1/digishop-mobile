import {Component, Input, OnInit} from '@angular/core';
import {CategorieBoutique} from "../Model/CategorieBoutique";

@Component({
  selector: 'app-categorie-shop',
  templateUrl: './categorie-shop.component.html',
  styleUrls: ['./categorie-shop.component.scss'],
})
export class CategorieShopComponent{
@Input() category:CategorieBoutique;
  constructor() { }


}
