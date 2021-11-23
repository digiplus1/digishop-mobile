import {BoutiquePos} from "../../../../../../Model/BoutiquePos";
import {InventaireItem} from "./InventaireItem";
import {Utilisateur} from "../../../../../../Model/Utilisateur";


export class InventaireDTO {
  idinventaire:number;
  datecreation:Date;
  dateapplication:Date;
  datevalidation:Date;
  validerinventaire:boolean;
  boutique:BoutiquePos;
  proprietaire:Utilisateur;
  inventaireItemList:InventaireItem[]
}
