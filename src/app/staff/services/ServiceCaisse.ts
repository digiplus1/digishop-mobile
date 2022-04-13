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
import {SessionFermer} from "../components/dashboard/models/Session-fermer";
import {Network} from "@awesome-cordova-plugins/network/ngx";

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
  public online: boolean = true;

  //Test d'affichage dans le compte client
  affiche : number = 1;
  constructor(public http:HttpClient,public authenService:AuthenService,
              public router:Router,private network: Network) {
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


  fermeturecaisse(referencefermeturesession:string){
    return this.http.get<SessionFermer>(AdresseIP.host+'fermeturecaisse/'+referencefermeturesession+"/"+this.authenService.utilisateur.reference);
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
  getrapportBoutique(caisseDTO:CaisseDTO){
    return this.http.post<CaisseDTO>(AdresseIP.host+'rapportfermeture/',caisseDTO)
  }
  getSession(username : string){
    return this.http.get<CaisseDTO>(AdresseIP.host+"session/"+username);
  }
  finByidcaissesession(idsession:string){
    return this.http.get<SessionFermer>(AdresseIP.host+"session_caisse_reference/"+idsession);
  }
  getEtatSession(idsession: number, username : string){
    return this.http.get<CaisseDTO>(AdresseIP.host+"getetatsession/"+idsession+"/"+username);
  }
  getfermeturecaisse(caisseDTO:CaisseDTO){
    return this.http.post<SessionFermer>(AdresseIP.host+'getfermeturecaisse',caisseDTO);
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
  findAllSessionFermer(){
    return this.http.get<SessionFermer[] >(AdresseIP.host+'allsessionfermer/'+this.authenService.utilisateur.referenceboutique)
  }
  getrapportBoutiqueByResferencesessionfermer(referencefermeture:string){
    return this.http.get<SessionFermer>(AdresseIP.host+'rapportfermetureglobal/'+referencefermeture)
  }

  checkCaisseOuverte(referenceuser:string){
    return this.http.get<string[]>(AdresseIP.host+'checkcaisseouverte/'+referenceuser)
  }

  cloturerapportglobale(caisseDTO:CaisseDTO){
    return this.http.post<SessionFermer>(AdresseIP.host+'cloturerapportglobale/',caisseDTO)
  }

  valideVenteOffline() {
    let cDTOs: CaisseDTO[] = [];
    cDTOs = JSON.parse(localStorage.getItem('ventes'));
    if(cDTOs) {
      console.log("I am enter");
      cDTOs.forEach(c => {
        this.ManageCaisse(c).subscribe(
          data=>{
            console.log("Après la vente: ",data);
            this.caisseDTOTemp = data;
          },error => {
            this.authenService.toastMessage(error.error.message);
          },
          ()=>{
            this.SessionActive.soldesession = this.caisseDTOTemp.soldesession;
            this.caisseTransactionsList.push(this.caisseDTOTemp.caisseTransaction);
            this.ventesTransactionsList.push(this.caisseDTOTemp.caisseTransaction);
          }
        )
      });
      localStorage.removeItem('ventes');
    }
  }
  testConnexion() {
    // watch network for a disconnection
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
     this.online=false;
    });

// stop disconnect watch
    disconnectSubscription.unsubscribe();


// watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.online=true;
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
   // this.online = navigator.onLine;
    console.log(this.online)
    if (this.online){
      this.valideVenteOffline();
    }

  }
}
