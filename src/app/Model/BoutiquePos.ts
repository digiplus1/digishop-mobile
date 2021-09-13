import {ProduitDto} from './ProduitDto';
import {Utilisateur} from "./Utilisateur";

export class BoutiquePos {
  idBoutique:number;
  nomBoutique:string;
  lien:string;
  adressBoutique:string;
  pays:string;
  ville:string;
  quartier:string;
  secteur:string;
  emailBoutique:string;
  telephoneBoutique:string;
  photoboutique:string;
  description:string;
  date:Date;
  activeboutique:boolean;
  nomproprietaire:string;
  proprietaire:Utilisateur;
  vendeurs:Utilisateur[];
  secteuractivite:string;
  qrcode:string;
  produits:ProduitDto[];

}
