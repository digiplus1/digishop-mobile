import {ProduitDto} from './ProduitDto';
import {Utilisateur} from "./Utilisateur";

export class BoutiquePos {
  idboutique:number;
  nomBoutique:string;
  region:string;
  referenceexterne:string;
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
  reference: string;

}
