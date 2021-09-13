import {CatalogueProduit} from './CatalogueProduit';

export class CategorieProduitDTO {
  id:number;
  nomCategorie:string;
  classe:string;
  secteuractivite:string;
  imageCategorie:string;
  date:Date;
  active:boolean;
  catalogueProduits:CatalogueProduit[];
}
