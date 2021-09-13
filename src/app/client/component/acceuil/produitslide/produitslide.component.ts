import {Component, Input, OnInit} from '@angular/core';
import {CategorieBoutique} from "../Model/CategorieBoutique";
import {CategorieProduitDTO} from "../../../../Model/CategorieProduitDTO";

@Component({
  selector: 'app-produitslide',
  templateUrl: './produitslide.component.html',
  styleUrls: ['./produitslide.component.scss'],
})
export class ProduitslideComponent implements OnInit {
  @Input() categorieProduitDTO:CategorieProduitDTO;
  constructor() { }

  ngOnInit() {}

}
