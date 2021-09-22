import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {ProduitService} from "../../Service/ProduitService";
import {BoutiqueService} from "../../Service/BoutiqueService";
import {NatifService} from "../../Service/NatifService";
import {FavoriteService} from "../../Service/FavoriteService";
import {CouponService} from "../../Service/CouponService";
import {CartService} from "../../Service/CartService";
import {AlertController, ModalController} from "@ionic/angular";
import {CommandeClientService} from "../../Service/CommandeClientService";
import {DigiXpresService} from "../../Service/DigiXpresService";
import {Commande} from "../../../Model/Commande";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss'],
})
export class HistoriqueComponent implements OnInit {
  page: number=0;
  public stylestatuscommand: any = {
    couleur: '',
    status: ''
  };
  constructor(public authenService: AuthenService, public produitService: ProduitService,public modalController: ModalController,
              public commandeService: CommandeClientService, public boutiqueService: BoutiqueService, public cartService: CartService,
              public router: Router, public alertCtrl: AlertController, public digixpresService: DigiXpresService,
              public favoriteService:FavoriteService, public couponClientService: CouponService) {
  }

  ngOnInit() {
    this.commandeService.getCommandesByClientIsEnTerminer(this.page);
  }
  getColor(c: Commande): any {
    if (c.payement.modepayement == 'ORANGE MONEY' || c.payement.modepayement == 'MTN MOBILE MONEY' || c.payement.modepayement == 'CASH') {
      this.stylestatuscommand.couleur = '#5be84a';
      this.stylestatuscommand.status = 'Payé';
      return this.stylestatuscommand;
    } else {
      this.stylestatuscommand.couleur = '#e84a4d';
      this.stylestatuscommand.status = 'Impayé';
      return this.stylestatuscommand;
    }
  }

  loadData(evt) {
    if (this.page < this.commandeService.commandePage.totalPages) {
      ++this.page;
      this.commandeService.getCommandesByClientIsEncours(this.page);
      evt.target.complete();
    }
    if (this.page>=this.commandeService.commandePage.totalPages) {
      evt.target.disabled=true;
    }
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.commandeService.commandes=[];
    this.commandeService.getCommandesByClientIsEncours(this.page);
    event.target.complete();
  }
}
