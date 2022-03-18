import {ProduitDto} from "../../../../Model/ProduitDto";
import {SessionFermer} from "./Session-fermer";

export class ItemsessionFermer {
  id: number;
  quantite: number;
  prixunitaire: number;
  montant: number;
  description: string;
  reference: string;
  produit: ProduitDto;
  sessionfermer: SessionFermer;
  date: Date;
}
