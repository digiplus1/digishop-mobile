import {Commande} from "../../Model/Commande";
import {CaisseSession} from "./CaisseSession";

export class CaisseTransactions {
  idtransaction:number;
  typetransaction:string;
  montanttransaction:number;
  montantprecedent:number;
  dernieretransaction:number;
  datetransaction:Date;
  commentaire:string;
  typepaiement:string;
  caisseSession:CaisseSession;
  commande:Commande;
}
