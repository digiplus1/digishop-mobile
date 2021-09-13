import {ProduitDto} from "./ProduitDto";
import {Commande} from "./Commande";
import {CodeCoupon} from "./CodeCoupon";

export class CouponDTO {
  idcoupon:number;
  dateFin:Date;
  dateDebut:Date;
  expire:boolean;
  auteur:string;
  typecoupon:string;
  userCoupon:string;
  usercreatecoupon:string;
  promotion:boolean;
  nbrecoupon:number;
  codeCoupons:CodeCoupon[];
  idproduits:number[];
  montant:number;
  pourcentage:number=0;
  plafond:number=0;
  action:string;
  produitsCoupons:ProduitDto[];
  commande:Commande;
  idcommande:number;
  code:string;
  montantCoupon:number=0;

}
