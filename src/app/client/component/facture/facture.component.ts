import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {ProduitService} from "../../Service/ProduitService";
import {CommandeClientService} from "../../Service/CommandeClientService";
import {BoutiqueService} from "../../Service/BoutiqueService";
import {CartService} from "../../Service/CartService";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {DigiXpresService} from "../../Service/DigiXpresService";
import {CouponService} from "../../Service/CouponService";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss'],
})
export class FactureComponent implements OnInit {

  constructor(public authenService: AuthenService, public produitService: ProduitService, public commandeService: CommandeClientService, public boutiqueService: BoutiqueService,
              public cartService: CartService, public router: Router, public alertCtrl: AlertController, public digixpresService: DigiXpresService, public couponClientService: CouponService) {
  }

  ngOnInit() {}

}
