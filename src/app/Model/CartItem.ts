import {ProduitDto} from './ProduitDto';

export class CartItem {
  idcartitem:number;
  quantite:number;
  prixunitaire:number;
  montant:number = 0;
  description:string;
  produit:ProduitDto;
  nomproduit:string;

  idproduit:number;
  typeaction:string;
  idcart:number;
}
