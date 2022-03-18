import {CaisseSession} from "../../../models/CaisseSession";
import {ItemsessionFermer} from "./ItemsessionFermer";

export class SessionFermer {
  datefermeture: Date;
  reference: string;
  itemsessionfermers: ItemsessionFermer[];
  itemsessionfermerglobales: ItemsessionFermer[];
  status: string;
  entree: string;
  sortie: string;
  cash: string;
  momo: string;
  om: string;
  caisseSession: CaisseSession;
  totalvente: string;
  sessionfermers: SessionFermer[];
}
