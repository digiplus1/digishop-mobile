import {BoutiquePos} from "../../../../../../Model/BoutiquePos";
import {Utilisateur} from "../../../../../../Model/Utilisateur";
import {InventaireItem} from "./InventaireItem";


export class Inventaire {
  idinventaire:number;
  datecreation:Date;
  dateapplication:Date;
  datevalidation:Date;
  step:number;
  validerinventaire:boolean;
  boutique:BoutiquePos;
  proprietaire:Utilisateur;
  inventaireItemList:InventaireItem[];
  iduserinitiate:number;
  iduserdefine:number;
  boutiqueid:number;

  //accordion value
  is_unroll: boolean;
}
