import {Pageable} from "../../Model/Pageable";
import {CaisseTransactions} from "./CaisseTransactions";

export class CaisseTransactionDTOPage {
  content:CaisseTransactions[];
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
