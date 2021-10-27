import {Commande} from "../../Model/Commande";
import {CartItem} from "../../Model/CartItem";
import {CaisseTransactions} from "./CaisseTransactions";
import {CaisseTransactionsHorsSession} from "./CaisseTransactionsHorsSession";
import {CaisseSession} from "./CaisseSession";
import {BoutiquePos} from "../../Model/BoutiquePos";

export class CaisseDTO {
  idcaissesession: number;
  montantinitial:number;
  dateouverture:Date;
  datefermeture:Date;
  montanttheorique:number;
  montantphysique:number;
  statut:string;
  soldesession:number=0;
  nomuser:string;
  caisseTransaction : CaisseTransactions;
  id_user:number;
  montanttransaction:number;
  commentaire:string;
  action:string;
  typepaiement:string;
  phone:string;
  code_orange:string;
  cartItems : CartItem [];
  commande : Commande;
  entree:number;
  sortie:number;
  cash:number;
  momo:number;
  om:number;

  operateurnom:string;//ici on a le nom de la personne qui effectue la tache si c est une laverie ou coifure ou encore la scolarité de la personne que l'on paie

  idcaisse:number;
  datecreation:Date;
  boutique:BoutiquePos;
  nomBoutique:string;
  soldecaisse:string;
  caisseSessions:CaisseSession[];
  caisseTransactionsHorsSessions:CaisseTransactionsHorsSession[];
}
