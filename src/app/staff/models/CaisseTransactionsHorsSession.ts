import {CaisseDTO} from "./CaisseDTO";
import {Utilisateur} from "../../Model/Utilisateur";
import {Commande} from "../../Model/Commande";

export class CaisseTransactionsHorsSession {
  idtransaction:number;
  typetransaction:string;
  montanttransaction:number;
  dernieretransaction:number;
  datetransaction:Date;
  commentaire:string;
  typepaiement:string;
  caisse:CaisseDTO;
  clientPOS:Utilisateur;
  commande : Commande;
}
