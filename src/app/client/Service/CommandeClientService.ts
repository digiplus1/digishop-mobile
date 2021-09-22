import {CommandePage} from "../../Model/CommandePage";
import {Commande} from "../../Model/Commande";
import {Cart} from "../../Model/Cart";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {NgxSpinnerService} from "ngx-spinner";
import {AdresseIP} from "../../Service/AdresseIP";

@Injectable()
export class CommandeClientService {

  commande:Commande=new Commande();
  commandePage:CommandePage;
  commandes:Commande[];
  constructor(public http:HttpClient,public authenService:AuthenService,private spinner: NgxSpinnerService){

  }


  covertCartToCommande(cart:Cart){
    this.commande=new Commande();
    this.commande.cartItems=cart.cartItems;
    this.commande.nomclient=cart.nomclient;
    this.commande.client=this.authenService.utilisateur;
    this.commande.netaPayer=cart.montanttotal;
    this.commande.montantTTC=cart.montanttotal;
    this.commande.type_facture="Pro forma";
    this.commande.statut="Non payé";
  }

  createCommande(commande:Commande){
    return this.http.post<Commande>(AdresseIP.host+'commandeproceed',commande)
  }


  getCommandesByClientIsEncours(page:number){
    if (this.authenService.utilisateur){

      return this.http.get<CommandePage>(AdresseIP.host+'getcommandebyclientisencours/'+this.authenService.utilisateur.username+'?size=10&page='+page).subscribe(
        data=>{
          this.commandePage=data;
          this.commandes=data.content;
        },error => {
          this.authenService.toastMessage(error.error.message)
        }
      );

    }
  }


  getCommandesByClientIsEnTerminer(page:number){
    if (this.authenService.utilisateur){

      return this.http.get<CommandePage>(AdresseIP.host+'getcommandebyclientistermine/'+this.authenService.utilisateur.username+'?size=10&page='+page).subscribe(
        data=>{
          this.commandePage=data;
          this.commandes=data.content;
        },error => {
          this.authenService.toastMessage(error.error.message)
        }
      );

    }
  }
  getCommandesByClient(client:string){
    if (client){

      return this.http.get<CommandePage>(AdresseIP.host+'getcommandebyclient/'+client);

    }
  }

  getCommandesByIdcommde(idcomm:number){
    if (this.authenService.utilisateur){
      return this.http.get<Commande>(AdresseIP.host+'getcommandebyid/'+idcomm);
    }
  }

}
