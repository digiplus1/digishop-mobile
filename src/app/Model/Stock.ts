import {ProduitDto} from "./ProduitDto";

export class Stock {
  idstock:number;
  totalStock:number;
  reservedStock:number;
  shoppingStock:number;
  stockAlarmLimit:number;
  typeStock:string;
  dateManufacture:Date;
  derniereSortie:number;
  dernierAjout:number;
  dateexpiration:Date;
  quantite:number;
  idUser:number;
  idProduit:number;
  managePeremption:boolean;
  commentaire:string;
  produit: ProduitDto;
}
