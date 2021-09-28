import {ImageProduits} from "./ImageProduits";
import {Stock} from "./Stock";
import {CatalogueProduit} from "./CatalogueProduit";


export class ProduitDto {
  idProduit:number;
  nomProduit:string;
  prixProduit:number;
  afficherprix:boolean;
  appliqueReduction:boolean;
  nomCategorie:string;
  referenceProduit:string;
  description:string;
  caracteristiques:string;
  image:string;
  arrivage:boolean;
  qcode:string;
  quantiteEnStock:number;
  marque:string;
  gamme:string;
  activeproduit:boolean;
  fraisLivraisonPointRelais:number;
  fraisLivraisonPointSpecifique:number;
  activeprixlivraison:boolean;
  poids:string;
  dateproduit:Date;
  dateDebutPromotion:Date;
  dateFinPromotion:Date;
  prixpromotionnel:number;
  pourcentagepromotion:number;
  promoAcitve:boolean;
  is_add_cart:boolean;//cette variable permet de de savoir si une variable pourra etre ajouter ou pas au panier
  nomboutique:string;
  imageProduits:ImageProduits[];
  catalogueProduit:CatalogueProduit;
  manageStock:boolean;
  stock:Stock;
  lien:string;
  populaire : boolean;
}
