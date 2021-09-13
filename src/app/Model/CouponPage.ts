import {Pageable} from "./Pageable";
import {CouponDTO} from "./CouponDTO";

export class CouponPage {
  content:CouponDTO[];
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
