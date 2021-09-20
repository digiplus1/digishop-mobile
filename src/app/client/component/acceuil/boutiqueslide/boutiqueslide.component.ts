import {Component, Input, OnInit} from '@angular/core';
import {ProduitDto} from "../../../../Model/ProduitDto";
import {BoutiquePos} from "../../../../Model/BoutiquePos";
import {Router} from "@angular/router";
import {BoutiqueService} from "../../../Service/BoutiqueService";

@Component({
  selector: 'app-boutiqueslide',
  templateUrl: './boutiqueslide.component.html',
  styleUrls: ['./boutiqueslide.component.scss'],
})
export class BoutiqueslideComponent implements OnInit {
  @Input() boutiquePos:BoutiquePos[];
  slideopts = {
    initialSilde: 0,
    spaceBetween: 0,
    slidesPerView: 1.8,
    slidesOffsetBefore: 5
  };
  constructor(public router:Router,public boutiqueService:BoutiqueService) { }

  ngOnInit() {}

  goToShop(b: BoutiquePos) {
    this.boutiqueService.boutique=b;
    this.router.navigateByUrl("tabclient/client/boutique")
  }
}
