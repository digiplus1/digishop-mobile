import {Cart} from "./Cart";
import {FavorisDTO} from "./FavorisDTO";
import {CaisseSession} from "../staff/models/CaisseSession";
import {BoutiquePos} from "./BoutiquePos";


export class Utilisateur {
  admin: boolean;
  client: boolean;
  cni: string;
  email: string;
  nomcomplet: string;
  id_user: number;
  password: string;
  phone: string;
  photouser: string;
  proprietaire: boolean;
  staff: boolean;
  support: boolean;
  username: string;
  ativeuser:boolean;
  activevendeur:boolean;
  vendeur: boolean;
  roles:any[];
  role:string;
  date:Date;
  nomBoutique:string;
  cart:Cart;
  favoris:FavorisDTO;
  caisseSessions : CaisseSession [];
  boutique:BoutiquePos;
}
