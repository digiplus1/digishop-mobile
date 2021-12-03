import {Component, OnInit} from '@angular/core';
import {AuthenService} from "../../../../home/components/Service/AuthenService";
import {ProduitService} from "../../../Service/ProduitService";
import {CartService} from "../../../Service/CartService";
import {Router} from "@angular/router";
import {AlertController, ModalController} from "@ionic/angular";
import {CommandeClientService} from "../../../Service/CommandeClientService";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {DigiXpresService} from "../../../Service/DigiXpresService";
import {CouponDTO} from "../../../../Model/CouponDTO";
import {CouponService} from "../../../Service/CouponService";
import {Cart} from "../../../../Model/Cart";
import {Commande} from "../../../../Model/Commande";
import {ModalconfirmComponent} from "../../../../staff/components/caisse/components/ventecaisse/components/paiement-proccess/modalconfirm/modalconfirm.component";
import {ModalpayementclientComponent} from "./modalpayementclient/modalpayementclient.component";

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss'],
})
export class PayementComponent implements OnInit {
  image_payment: string;
  code_coupon: string;
  coupon: CouponDTO;
  is_loading: boolean;

  constructor(public authenService: AuthenService, public produitService: ProduitService,  private modalController : ModalController,
              public commandeService: CommandeClientService, public boutiqueService: BoutiqueService,
              public cartService: CartService, public router: Router, public alertCtrl: AlertController, public digixpresService: DigiXpresService, public couponClientService: CouponService) {
  }

  ngOnInit() {
  }


  mode_paymnt(even: any) {
    let i = even.target.value;
    if (i == 1) {
      this.image_payment = "assets/image/mtn-mobile-money.jpg";
      this.commandeService.commande.modepayement = "MTN MOBILE MONEY"
    } else if (i == 2) {
      this.image_payment = "assets/image/om.png";
      this.commandeService.commande.modepayement = "ORANGE MONEY"
    }
    if (i == 3) {
      this.image_payment = "assets/image/delivery2.png";
      this.commandeService.commande.modepayement = "PAYEMENT A LA LIVRAISON"
    }
  }

  check_coupon(code_coupon) {
    this.coupon = new CouponDTO();
    this.coupon.code = code_coupon;
    this.coupon.action = "use";
    this.coupon.idcommande = this.commandeService.commande.idcommande;
    this.couponClientService.create_Coupon(this.coupon).subscribe(
      data => {
        this.commandeService.commande = data.commande;
      }, error => {
        this.authenService.toastMessage(error.error.message);
      }
    )
  }

  async openpaiement(cT : Commande) {
    const modal = await this.modalController.create({
      component: ModalpayementclientComponent,
      cssClass:"modalpaymentconfirm",
      componentProps: {
        'payment' : cT
      }
    });
    return await modal.present();
  }
  payer() {
    this.commandeService.commande.modecommande = "ligne";
    this.commandeService.commande.phone = this.commandeService.commande.client.phone;
    this.commandeService.commande.nomclient = this.commandeService.commande.client.username;
    this.is_loading=true;
    this.commandeService.createCommande(this.commandeService.commande).subscribe(
      data => {
        this.is_loading=false;
        data.type_facture = "Facture";
        this.commandeService.commande = data;
        if (data.modepayement=="MTN MOBILE MONEY"){
          if (data.payement.statut=="FAILED"){
            this.commandeService.commande.message="Votre solde est insufisant";
          }else if (data.payement.statut=="PENDING"){
            this.commandeService.commande.message="Merci de confirmer le paiement sur votre mobile et de cliquer sur le button pour continuer";
          }else if (data.payement.statut=="SUCCESSFUL"){
            this.commandeService.commande.message="Merci d'avoir confirmé le paiement nous vous remercions pour cela";
          }
        }else if (data.modepayement=="ORANGE MONEY"){
          if (data.payement.url_to_connect){
            this.commandeService.commande.message="Merci de cliquer sur le button pour continuer l'opération de paiment sur "+data.modepayement;
          }
        }
        if (data.modepayement=="ORANGE MONEY" || data.modepayement=="MTN MOBILE MONEY"){
          this.openpaiement(data)
        }
      }, error => {
        this.is_loading=false;
        this.authenService.toastMessage(error.error.message);
      }
    )
  }
}
