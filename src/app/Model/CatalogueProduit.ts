import {CategorieProduitDTO} from './CategorieProduitDTO';

export class CatalogueProduit {
  id:number;
  categorieProduit:CategorieProduitDTO;
  nomProduit:string;
  prix:number;
  genreClient:string;
  image:string;
  date:Date;
  active:boolean;
  nomcategorie:string;
}
