import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../../home/components/Service/AuthenService";
import {ProduitService} from "../../../Service/ProduitService";
import {AlertController, ModalController} from "@ionic/angular";
import {CommandeClientService} from "../../../Service/CommandeClientService";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {CartService} from "../../../Service/CartService";
import {Router} from "@angular/router";
import {DigiXpresService} from "../../../Service/DigiXpresService";
import {CouponService} from "../../../Service/CouponService";

@Component({
  selector: 'app-modaldetail',
  templateUrl: './modaldetail.component.html',
  styleUrls: ['./modaldetail.component.scss'],
})
export class ModaldetailComponent implements OnInit {

  constructor(public authenService: AuthenService, public produitService: ProduitService,public modalController: ModalController,
              public commandeService: CommandeClientService, public boutiqueService: BoutiqueService, public cartService: CartService,
              public router: Router, public alertCtrl: AlertController, public digixpresService: DigiXpresService,
              public couponClientService: CouponService) {
  }

  ngOnInit() {}

  closemodal() {
    this.modalController.dismiss();
  }
}
