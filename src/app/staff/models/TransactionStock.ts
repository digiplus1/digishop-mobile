import {Utilisateur} from "../../Model/Utilisateur";
import {ProduitDto} from "../../Model/ProduitDto";

export class TransactionStock {
  quantiteinitiale:number;
  quantitefinale:number;
  quantite:number;
  user:Utilisateur;
  produit:ProduitDto;
  idboutique:number;
}
