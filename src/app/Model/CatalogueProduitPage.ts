import { CatalogueProduit } from "./CatalogueProduit";
import {Pageable} from "./Pageable";

export class CatalogueProduitPage {
  content:CatalogueProduit[];
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
