import {CaisseDTO} from "./CaisseDTO";
import {Utilisateur} from "../../Model/Utilisateur";
import {CaisseTransactions} from "./CaisseTransactions";

export class CaisseSession {
  idcaissesession:number;
  montantinitial:number;
  dateouverture:Date;
  datefermeture:Date;
  montantphysique:number;
  montanttheorique:number;
  statut:string;
  soldesession:number;
  caisse:CaisseDTO;
  shopuser:Utilisateur;
  nomuser:string;
  caisseTransactions:CaisseTransactions[];
}
