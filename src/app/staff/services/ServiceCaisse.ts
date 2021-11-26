import {Injectable} from "@angular/core";
import {CaisseDTO} from "../models/CaisseDTO";
import {HttpClient} from "@angular/common/http";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import {AdresseIP} from "../../Service/AdresseIP";
import {CaisseTransactionDTOPage} from "../models/CaisseTransactionDTOPage";
import {CaisseTransactions} from "../models/CaisseTransactions";
import {Commande} from "../../Model/Commande";
import {ProduitDto} from "../../Model/ProduitDto";
import {CartItem} from "../../Model/CartItem";


@Injectable()
export class  ServiceCaisse {
  flagButton : boolean = false
  SessionActive : CaisseDTO;
  caisseDTOTemp : CaisseDTO;
  caisseDTOListTemp : CaisseDTO[];
  caisseTransactionsList : CaisseTransactions [] = [];
  directsTransactionsList : CaisseTransactions [] = [];
  ventesTransactionsList : CaisseTransactions [] = [];
  operateur:string[];

  //Test d'affichage dans le compte client
  affiche : number = 1;
  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {
  }




  ajouter_panierClient(produit: ProduitDto, qty: number, action: string) {
    if((produit.quantiteEnStock>0 && produit.manageStock)|| (produit.quantiteEnStock<=0 && !produit.manageStock)){
      let cartitem = new CartItem();
      cartitem.quantite = qty;
      cartitem.prixunitaire = produit.prixProduit;
      cartitem.description = produit.nomProduit;
      cartitem.typeaction = action;
      cartitem.idproduit = produit.idProduit;
      cartitem.produit = produit;
      let existe_shop:boolean;
      if (this.authenService.user_vendeur.cart.cartItems){
        this.authenService.user_vendeur.cart.cartItems.forEach(p=>{
          if (p.produit.nomboutique!=produit.nomboutique){
            existe_shop=true;
          }
        });

      }

      if (!existe_shop){
        this.managecartAction(cartitem);
        let index = this.authenService.user_vendeur.cart.cartItems.findIndex(p => p.produit.idProduit == produit.idProduit);
        let item = this.authenService.user_vendeur.cart.cartItems.find(p => p.produit.idProduit == produit.idProduit);
        if (item) {
          if (action == 'add') {
            this.authenService.user_vendeur.cart.cartItems[index].quantite += qty;
          } else if (action == 'remove') {
            this.authenService.user_vendeur.cart.cartItems[index].quantite -= qty;
            if (this.authenService.user_vendeur.cart.cartItems[index].quantite == 0) {
              this.authenService.user_vendeur.cart.cartItems.splice(index, 1);
            }
          } else if (action == 'delete') {
            this.authenService.user_vendeur.cart.cartItems.splice(index, 1);
          }

        } else {
          this.authenService.user_vendeur.cart.cartItems.push(cartitem);
        }
        this.calcul_price();
      } else {
        this.authenService.toastMessage("Votre panier contient deja les produits de "+this.authenService.user_vendeur.cart.cartItems[0].produit.nomboutique)
      }
    }else {
      this.authenService.toastMessage("Le produit "+produit.nomProduit+" n'existe plus en stock")
    }
  }
   calcul_price() {
    let total: number = 0;
    this.authenService.user_vendeur.cart.cartItems.forEach(c => {
      c.montant = c.prixunitaire * c.quantite;
      total += c.montant;
    });
    this.authenService.user_vendeur.cart.montanttotal = total;
  }

  managecartAction(cartItemDTO: CartItem) {
    if (this.authenService.user_vendeur){
        cartItemDTO.idcart = this.authenService.user_vendeur.cart.idcart;
      return this.http.post<boolean>(AdresseIP.host + 'cartaction', cartItemDTO).subscribe(
        data => {
        },error => {
          this.authenService.toastMessage(error.error.message);
        }
      );
    }

  }


  ManageCaisse (cDTO:CaisseDTO){
    return this.http.post<CaisseDTO>(AdresseIP.host+'managecaisse', cDTO);
  }


  UpdateAfterOffline(cDTOs : CaisseDTO[]){
    this.http.post<CaisseDTO[]>(AdresseIP.host+'offlineupdate', cDTOs).subscribe(
      data=>{
        this.caisseDTOListTemp=data;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getAllTransactionBySession(idsession:number){
    return this.http.get<CaisseTransactionDTOPage>(AdresseIP.host+"getalltransactionbysession/"+idsession)
  }

  getAllTransactionBySessionAndUser(idsession:number){
    return this.http.get<CaisseTransactions[]>(AdresseIP.host+"getalltransactionbysession/"+idsession)
  }

  getSession(username : string){
    return this.http.get<CaisseDTO>(AdresseIP.host+"session/"+username);
  }
  finByidcaissesession(idsession:number){
    return this.http.get<CaisseDTO>(AdresseIP.host+"session_caisse_id/"+idsession);
  }
  getEtatSession(idsession: number, username : string){
    return this.http.get<CaisseDTO>(AdresseIP.host+"getetatsession/"+idsession+"/"+username);
  }
  get_status_vente(referencecommande:string){
    let commande =new Commande();
    commande.referencecommande=referencecommande;
    return this.http.post<CaisseDTO>(AdresseIP.host+'session/statut/commande',commande)
  }
  getAlloperateur(){

    return this.http.get<string[]>(AdresseIP.host+'operateur/').subscribe(
      data=>{
        this.operateur=data;
      },error => {
        this.authenService.toastMessage(error.error.message)
      }
    )
  }
}
