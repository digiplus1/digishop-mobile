import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AdresseIP} from "../../Service/AdresseIP";
import {CategorieProduitDTO} from "../../Model/CategorieProduitDTO";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ProduitDto} from "../../Model/ProduitDto";
import {produitDtoPage} from "../../Model/ProduitDtoPage";
import {Router} from "@angular/router";
import {ProduitBoutique} from "../../Model/ProduitBoutique";

@Injectable()

export class ProduitService{
  listnom:string[];
  listnomByshop:string[];
  public produit:ProduitDto;
  public produits:ProduitDto[];
  categories:CategorieProduitDTO[];
  public produitBoutique: ProduitBoutique;
  constructor(public http:HttpClient,public authenService:AuthenService,public router:Router) {
    this.getAllNom();
  }

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
        this.router.navigateByUrl("tabclient/client/produits")
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getAllNom(){
    return this.http.get<string[]>(AdresseIP.host+'all_nom/').subscribe(
      data=>{
        this.listnom=data;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getAllNomByshop(boutique:string){
    return this.http.get<string[]>(AdresseIP.host+'getallnomproduitbyshop/'+boutique).subscribe(
      data=>{
        this.listnomByshop=data;
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }

  getallproduitbyboutiqueIsactive(boutique:string){

    return this.http.get<produitDtoPage>(AdresseIP.host+"getallproduitbyboutiqueisactive/"+boutique)
  }

  getAllProduitOrshop(mot:string){
    return this.http.get<ProduitBoutique>(AdresseIP.host+'recherche/'+mot)
  }

  getProduitByQrcode(qrcode:string){
    return this.http.get<ProduitDto>(AdresseIP.host+'getproduitbyqcode/'+qrcode).subscribe(
      data=>{
        if (data){
          this.produit=data;
          this.router.navigateByUrl("tabclient/client/produits");
        }

      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }
}
