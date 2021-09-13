import {ProduitDto} from "./ProduitDto";
import {Pageable} from "./Pageable";

export class produitDtoPage {
  content:ProduitDto[];
  empty:boolean;
  first:boolean;
  last:boolean;
  size:number;
  totalElements:number;
  totalPages:number;
  pageable:Pageable;
  number:number;
  numberOfElements:number;
}
