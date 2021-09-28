import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenService} from "../../../../../../../home/components/Service/AuthenService";
import {ServicePanier} from "../../../../../../services/ServicePanier";
import {Cart} from "../../../../../../../Model/Cart";
import {ServiceCaisse} from "../../../../../../services/ServiceCaisse";

@Component({
  selector: 'app-connexion-client',
  templateUrl: './connexion-client.component.html',
  styleUrls: ['./connexion-client.component.scss'],
})
export class ConnexionClientComponent implements OnInit {
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
          console.log(data);
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
            } else {
              if(this.authenService.user_vendeur.cart.cartItems.length>0){
                let test : boolean = false;
                this.authenService.user_vendeur.cart.cartItems.forEach(c=>{
                  if (c.produit.nomboutique != this.authenService.utilisateur.nomBoutique){
                    test = true;
                  }
                })
                if (test){
                  this.serviceCaisse.affiche = 2;
                } else {
                  this.panierService.panierCaisse = this.authenService.user_vendeur.cart;
                  this.panierService.refreshPanier();
                  this.serviceCaisse.affiche = 3;
                  this.authenService.toastMessage("Connexion réussie")
                }
              } else {
                this.panierService.panierCaisse = this.authenService.user_vendeur.cart;
                this.panierService.refreshPanier();
                this.serviceCaisse.affiche = 3;
                this.authenService.toastMessage("Connexion réussie")
              }
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
