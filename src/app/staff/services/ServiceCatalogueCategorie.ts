import {Injectable} from "@angular/core";
import {CatalogueProduit} from "../../Model/CatalogueProduit";
import {AdresseIP} from "../../Service/AdresseIP"
import {CatalogueProduitPage} from "../../Model/CatalogueProduitPage";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class  ServiceCatalogueCategorie {

  catalogueproduits:CatalogueProduit[];
  cataloguerproduitPage:CatalogueProduitPage;
  liste_nom_catalogue:string[];
  listeNomCatalogueFilter: string[] = [];

  constructor(public http: HttpClient) {
  }

  getAllCatalogue(page) {
    return this.http.get<CatalogueProduitPage>(AdresseIP.host + 'catalogue/getallcatalogues?size=7&page='+page)
  }

  findallnomcatalogue(){
    return this.http.get<string[]>(AdresseIP.host + 'catalogue/getallcataloguebynom').subscribe(
      data=>{
        this.liste_nom_catalogue=data;
      }
    )
  }

  searchByNomCatalogue(nom_catalogue:string){
    return this.http.get<CatalogueProduit>(AdresseIP.host + 'catalogue/getcataloguebynom/'+nom_catalogue);
  }
}
