import {Cart} from "../../Model/Cart";

export class PanierTemp {
  id : number;
  libelle : string;
  panier : Cart = new Cart();
}
