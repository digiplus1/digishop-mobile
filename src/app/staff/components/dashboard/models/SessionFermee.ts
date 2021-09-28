import {CaisseSession} from "../../../models/CaisseSession";


export class SessionFermee {
  nomuser : string;
  nomvendeur : string;
  nomboutique : string;
  datedebut : Date;
  datefin : Date;
  montanttheorique : number;
  montantdeclare : number;
  montanttotal : number;
  nomvendeurs : string [] = [];
  caisseSessions : CaisseSession [] = [];
}
