import {Utilisateur} from "./Utilisateur";
import {CartItem} from "./CartItem";

export class Cart {
  idcart:number;
  montanttotal:number = 0;
  nomclient:string;
  cartItems:CartItem[]=[];
  client:Utilisateur;
}
