import {Utilisateur} from "./Utilisateur";
import {BoutiquePos} from "./BoutiquePos";
import {AdresseCommande} from "./AdresseCommande";
import {CartItem} from "./CartItem";
import {PayementDto} from "./PayementDto";

export class Commande {

  idcommande:number;
  referencecommande:string;
  nomvendeur:string;
  valider:boolean;
  modepayement:string;
  fraislivraison:number=0;
  grandTotal:number;
  boutique:BoutiquePos=new BoutiquePos();
  datecommande:Date;
  datepayement:Date;
  client:Utilisateur;
  statut:string;
  modecommande:string;
  code_cloture:string;
  codeclotureboutique:string;
  idcolis:number;
  dateLivraison:Date;
  livreur:string;
  codeCoupon:string;
  montantCoupon:number;
  montantRemise:number;
  reduction:boolean;
  adresse:AdresseCommande;
  nomclient:string;
  phone:string;
  codeorange:string;
  cartItems:CartItem[];
  montantcommande:number;
  payement:PayementDto;

  montantTTC:number;
  montantHT:number;
  montantTVA:number;
  netaPayer:number;

  idcaissesession:number;

  type_facture:string;
  remerciement:string;
}
