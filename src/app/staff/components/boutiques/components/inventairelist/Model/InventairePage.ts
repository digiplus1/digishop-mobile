import {Pageable} from "../../../../../../Model/Pageable";
import {Inventaire} from "./Inventaire";


export class InventairePage {
  content:Inventaire[];
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
