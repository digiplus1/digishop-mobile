import {Pageable} from "./Pageable";
import {Commande} from "./Commande";

export class CommandePage {
  content:Commande[];
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
