import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {ProduitService} from "../../Service/ProduitService";
import {CommandeClientService} from "../../Service/CommandeClientService";
import {BoutiqueService} from "../../Service/BoutiqueService";
import {CartService} from "../../Service/CartService";
import {AlertController, ModalController} from "@ionic/angular";
import {DigiXpresService} from "../../Service/DigiXpresService";
import {CouponService} from "../../Service/CouponService";
import {Commande} from "../../../Model/Commande";
import {ModaldetailComponent} from "./modaldetail/modaldetail.component";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss'],
})
export class CommandeComponent implements OnInit {
  public stylestatuscommand: any = {
    couleur: '',
    status: ''
  };
  page: number = 0;

  constructor(public authenService: AuthenService, public produitService: ProduitService,public modalController: ModalController,
              public commandeService: CommandeClientService, public boutiqueService: BoutiqueService, public cartService: CartService,
              public router: Router, public alertCtrl: AlertController, public digixpresService: DigiXpresService,
              public couponClientService: CouponService) {
  }

  ngOnInit() {
    this.commandeService.getCommandesByClientIsEncours(this.page);
  }



  async presentModal(c:Commande) {
    this.commandeService.commande=c;
    const modal = await this.modalController.create({
      component: ModaldetailComponent,
      cssClass: 'detailcommade'
    });
    return await modal.present();
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
  deletecommande(commande:Commande){
  }
  detailcommande(c: Commande) {
    this.commandeService.commande = c;
    this.router.navigateByUrl("client/facture")
  }

}
