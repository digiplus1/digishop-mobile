import {Inventaire} from './Inventaire';
import {ProduitDto} from "../../../../../../Model/ProduitDto";

export class InventaireItem {
  idinventaireitem:number;
  quantitetheorique:number;
  quantitephysique:number;
  difference:number;
  datecreation:Date;
  produit:ProduitDto;
  nomproduit:string;
  inventaire:Inventaire;
}
