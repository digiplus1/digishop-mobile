import {CaisseSession} from "../../../models/CaisseSession";
import {CaisseTransactionsHorsSession} from "../../../models/CaisseTransactionsHorsSession";


export class SessionOuverte {
  nomuser : string;
  modepaiement : string;
  nomboutique : string;
  montanttotal : number;
  montantboutique : number;
  montantligne : number;
  nomusers : string [] = [];
  modepaiements : string [] = [];
  caisseSessions : CaisseSession [] = [];
  caisseTransactionsHorsSessions : CaisseTransactionsHorsSession [] = [];
}
