import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceProduit} from "../../../../../services/ServiceProduit";
import {ServiceCatalogueCategorie} from "../../../../../services/ServiceCatalogueCategorie";
import {CatalogueProduit} from "../../../../../../Model/CatalogueProduit";
import {MainService} from "../../../../../../shared/services/MainService";
import {ModalController} from "@ionic/angular";
import {AuthenService} from "../../../../../../home/components/Service/AuthenService";

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.scss'],
})
export class AddproduitComponent implements OnInit {

  public formAddProduct: FormGroup;
  catalogue: string;
  catalogueSelected: CatalogueProduit;
  isLoading: boolean = false;

  constructor(
    public serviceProduit: ServiceProduit,
    public serviceCatalogueCategorie: ServiceCatalogueCategorie,
    private modalController : ModalController,
    private formBuilder: FormBuilder,
    private authenService: AuthenService
  ) { }

  ngOnInit() {}

  initForm() {
    this.formAddProduct = this.formBuilder.group({
      'name': ['', Validators.required],
      'prix': ['', Validators.required],
      'categorie': [{value: this.catalogueSelected.categorieProduit.nomCategorie, disabled: true }, [Validators.required]],
      'poids': ['', Validators.required],
      'marque': ['', Validators.required],
      'caracteristique': [''],
      'description': [''],
      'q-code': ['']
    });
  }

  closeM() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  FilterElement(ev: any) {
    if(ev != null) {
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.serviceCatalogueCategorie.listeNomCatalogueFilter = this.serviceCatalogueCategorie.liste_nom_catalogue.filter((a) => {
          return (a.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        /*this.serviceProduit.categorieListTemp = this.serviceProduit.categorieList.filter(p=>{
          return (p.nomCategorie.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })*/
      } else {
        this.serviceCatalogueCategorie.listeNomCatalogueFilter = [];
      }
    } else {
      this.serviceCatalogueCategorie.listeNomCatalogueFilter = [];
    }
  }

  selectItem(a: string) {
    this.serviceCatalogueCategorie.searchByNomCatalogue(a).subscribe(
      data => {
        this.catalogueSelected = data;
        console.log(this.catalogueSelected);
        this.initForm();
      },
      error => {
        console.log(error);
      }
    )
    this.catalogue = "";
    this.FilterElement(null);
  }

  addProduct() {
    this.isLoading = true;

    this.serviceProduit.produit.nomProduit = this.formAddProduct.get('name').value;
    this.serviceProduit.produit.prixProduit = this.formAddProduct.get('prix').value;
    this.serviceProduit.produit.catalogueProduit = this.catalogueSelected;
    this.serviceProduit.produit.poids = this.formAddProduct.get('poids').value;
    this.serviceProduit.produit.marque = this.formAddProduct.get('marque').value;
    this.serviceProduit.produit.caracteristiques = this.formAddProduct.get('caracteristique').value;
    this.serviceProduit.produit.description = this.formAddProduct.get('description').value;
    this.serviceProduit.produit.qcode = this.formAddProduct.get('q-code').value;
    this.serviceProduit.produit.nomboutique = this.authenService.boutique.nomBoutique

    console.log(this.authenService.boutique);

    this.serviceProduit.saveProduit(this.serviceProduit.produit).subscribe(
      res => {
        this.isLoading = false;
        this.closeM();
        this.serviceProduit.produitListTemp.reverse();
        this.serviceProduit.produitListTemp.push(res);
        this.serviceProduit.produitListTemp.reverse();
        this.authenService.toastMessage('Operation effectuée avec succès');
      },
      error => {
        this.isLoading = false;
        this.authenService.toastMessage(error.error.message);
      }
    )
  }

  takePicture() {

  }
}
