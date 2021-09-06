import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AdresseIP} from "../../Service/AdresseIP";
import {CategorieProduitDTO} from "../../Model/CategorieProduitDTO";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ProduitDto} from "../../Model/ProduitDto";
import {produitDtoPage} from "../../Model/ProduitDtoPage";
import {Router} from "@angular/router";

@Injectable()

export class ProduitService{
  public produit:ProduitDto;
  public produits:ProduitDto[];
  categories:CategorieProduitDTO[];
  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {}

  getAllCategorie(){
    return this.http.get<CategorieProduitDTO[]>(AdresseIP.host+'all/categorie').subscribe(
      data=>{
        this.categories=data;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getAllproduit(){
    return this.http.get<ProduitDto[]>(AdresseIP.host+'produits/active').subscribe(
      data=>{
        this.produits=data;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getAllproduitBycategorie(nomcategorie:string){
    return this.http.get<ProduitDto[]>(AdresseIP.host+'categorie/'+nomcategorie).subscribe(
      data=>{
        this.produits=data;
        this.router.navigateByUrl("client/produits")
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getallproduitbyboutiqueIsactive(boutique:string){

    return this.http.get<produitDtoPage>(AdresseIP.host+"getallproduitbyboutiqueisactive/"+boutique).subscribe(
      data=>{

        data.content.forEach(p=>{
          if (!p.manageStock){
            p.is_add_cart=true;
          } else if (p.manageStock && p.quantiteEnStock>0){
            p.is_add_cart=true;
          } else {
            p.is_add_cart=false;
          }
          p.lien=p.nomboutique.replace(" ","")
        });
        this.produits=data.content;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    )
  }
}
