import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServicePanier} from "../../../../../../services/ServicePanier";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";
import {Cart} from "../../../../../../../Model/Cart";

@Component({
  selector: 'app-connexionclient',
  templateUrl: './connexionclient.component.html',
  styleUrls: ['./connexionclient.component.scss'],
})
export class ConnexionclientComponent implements OnInit {
  login: string = "";
  is_loading: boolean = false;
  is_loading2: boolean = false;
  affiche : number = 1;
  constructor(private router : Router, public authenService : AuthenService,
              public panierService : ServicePanier, public serviceCaisse : ServiceCaisse) { }

  ngOnInit() {
    this.panierService.panierCaisse = new Cart();
  }

  goBack() {
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }

  onAction() {
    this.is_loading = true;
    if(this.login==""){
      this.authenService.toastMessage("Le champ est obligatoire.")
      this.is_loading = false;
    } else {
      this.authenService.ConnectAccountInShop(this.login).subscribe(
        data=>{
          this.authenService.user_vendeur = data;
        } ,error => {
          this.authenService.toastMessage(error.error.message);
          this.is_loading=false;
        },
        ()=>{
          this.is_loading = false;
          if(this.authenService.user_vendeur){
            if(!this.authenService.user_vendeur.client){
              this.authenService.toastMessage("Impossible de se connecter avec ce compte.")
              this.authenService.user_vendeur = null;
            }else {
              this.router.navigateByUrl("staff/menustaff/caisse/client/bodycart")
            }
          }
        }
      )
    }
  }

  annuler() {
    this.login = "";
    this.serviceCaisse.affiche = 1;
  }
  poursuivre() {
    this.is_loading2 = true;
    this.panierService.deletePanierClient(this.authenService.user_vendeur.cart.idcart).subscribe(
      data => {
        console.log(data);
        if(data){
          this.serviceCaisse.affiche = 3;
        } else {
          this.authenService.toastMessage("Une erreure est survenue lors de la suppression.")
          this.annuler();
        }
      },error => {
        this.authenService.toastMessage(error.error.message);
        this.is_loading=false;
      })
  }
}
