import {ProduitDto} from './ProduitDto';
import {BoutiquePos} from "./BoutiquePos";

export class FavorisDTO {
  idfavoris:number;
  nomclient:string;
  nomproduit:string;
  nomboutique:string;
  produitsfavotisList:ProduitDto[]=[];
  boutiquefavorisList:BoutiquePos[]=[];
  action:string;
}
