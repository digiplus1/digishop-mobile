import {Injectable} from "@angular/core";
import {Commande} from "../../Model/Commande";
import {AdresseIP} from "../../Service/AdresseIP";
import {HttpClient} from "@angular/common/http";
import {CommandeRef} from "../models/CommandeRef";
import {ClotureCommande} from "../models/ClotureCommande";


@Injectable()
export class  ServiceCommande {

  commandeRefList : CommandeRef [] = [];
  commandeRefListFilter : CommandeRef [] = [];
  commandeDTOTemp : Commande;

  constructor(private http : HttpClient) {
  }

  createCommande(commande:Commande){
    return this.http.post<Commande>(AdresseIP.host+'commandeproceed',commande)
  }

  clotureCommande(close : ClotureCommande){
    return this.http.post<boolean>(AdresseIP.host+'cloturecommande',close)
  }

  getListRefCommande(nomboutique : string){
    return this.http.get<CommandeRef[]>(AdresseIP.host + "getrefcommande/" + nomboutique);
  }

  getCommandeByID(id : number){
    console.log(id)
    return this.http.get<Commande>(AdresseIP.host + "getcommandebyid/" + id);
  }
}
