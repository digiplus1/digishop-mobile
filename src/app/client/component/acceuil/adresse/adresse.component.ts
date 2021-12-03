import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../../../../home/components/Service/AuthenService";
import {ProduitService} from "../../../Service/ProduitService";
import {CartService} from "../../../Service/CartService";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {AdresseCommande} from "../../../../Model/AdresseCommande";
import {CommandeClientService} from "../../../Service/CommandeClientService";
import {Quartiers} from "../../../../Model/Quartiers";
import {PointRelais} from "../../../../Model/PointRelais";
import {Secteurs} from "../../../../Model/Secteurs";
import {Villes} from "../../../../Model/Villes";
import {Localites} from "../../../../Model/Localites";
import {DigiXpresService} from "../../../Service/DigiXpresService";
import {CotationDto} from "../../../../Model/CotationDto";
import {BoutiqueService} from "../../../Service/BoutiqueService";
import {Cart} from "../../../../Model/Cart";

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss'],
})
export class AdresseComponent implements OnInit {
  public chois: string[] = ['Point Relais', 'Adresse Personnelle Destination'];
  public mode_livraison: string[] = ['Adresse de livraison', 'Venir a la boutique'];
  adresse:AdresseCommande=new AdresseCommande();
  valeur_adres: string;
  type_livraison: string;
  villes: Villes[]=[];
  quartiers: Quartiers[]=[];
  secteurs: Secteurs[]=[];
  point_relais: PointRelais[]=[];
  localite: Localites[]=[];
  secteur_lieu_enregistrement_coli: string;
  content_fraislivrai: string;


  is_loading:boolean;
   secteur_lieu_destination_coli: string;
  constructor(public authenService:AuthenService,public produitService:ProduitService,public commandeService:CommandeClientService,public boutiqueService:BoutiqueService,
              public cartService:CartService,public router:Router,public alertCtrl:AlertController,public digixpresService:DigiXpresService) { }

  ngOnInit() {
    this.commandeService.commande.boutique=this.boutiqueService.boutique;
    this.commandeService.commande.cartItems=this.authenService.utilisateur.cart.cartItems;
    this.commandeService.commande.grandTotal=this.authenService.utilisateur.cart.montanttotal;
    this.commandeService.commande.client=this.authenService.utilisateur;
    this.commandeService.commande.nomclient=this.authenService.utilisateur.username;
    this.getlistePays();

  }



  getlistePays(){
    this.digixpresService.getlistePays().subscribe(
      data => {
        this.villes=data.villes;
        this.get_reference_lieu_enregist();
      },error => {
        this.authenService.toastMessage(error.error.message);
      }
    )
  }

  selectmodeLivraison(event: any) {
    let val=event.target.value;
    console.log(val);
    this.type_livraison=val;
    if (val=="Adresse de livraison"){
      this.adresse=new AdresseCommande();
      this.adresse.typeAdress=val;
    }else if (val=="Venir a la boutique") {
      this.adresse=new AdresseCommande();
      this.adresse.typeAdress="MAGASIN";
      this.adresse.repere_address="MAGASIN";
      this.commandeService.commande.netaPayer -=this.commandeService.commande.fraislivraison;
      this.commandeService.commande.fraislivraison=0;
    }
  }


  selectquartier(event: any) {
    let ville: string;
    console.log(event.target.value);
    ville = event.target.value;
    if (ville) {
      this.adresse.city_address=ville;
      this.quartiers = this.villes.find(v => v.libelle_ville == ville).quartierss;
    } else {
      this.quartiers = [];
      this.secteurs = [];
      this.localite = [];
      this.point_relais = [];
    }
  }

  selectsecteur(event: any) {
    let quartier: string;
    console.log(event.target.value);
    quartier = event.target.value;
    if (quartier) {
      this.adresse.quartier_address=quartier;
      this.secteurs = this.quartiers.find(q => q.libelle_quartier == quartier).secteurs;
    } else {
      this.secteurs = [];
      this.localite = [];
      this.point_relais = [];
    }
  }

  selectlocalite(event: any) {
    let secteur: string;
    console.log(event.target.value);
    secteur = event.target.value;
    if (secteur) {
      this.adresse.secteurBloc_address=secteur;
      this.secteur_lieu_destination_coli = this.secteurs.find(q => q.libelle_secteur == secteur).reference;
      this.point_relais = this.secteurs.find(q => q.libelle_secteur == secteur).point_relaiss;
      this.localite = this.secteurs.find(q => q.libelle_secteur == secteur).localites;
      this.get_frais_livraison();
    } else {
      this.localite = [];
      this.point_relais = [];
    }
  }


  get_frais_livraison() {
    let cotation: CotationDto = new CotationDto();
    let descrip: string = '';
    let qte: string = '';
    this.content_fraislivrai = '';
    this.authenService.utilisateur.cart.cartItems.forEach(d => {
      descrip += d.produit.catalogueProduit.nomProduit + ',';
      qte += d.quantite + ',';
    });
    cotation.description_coli = descrip;
    cotation.quantites = qte;
    cotation.secteur_lieu_destination_coli = this.secteur_lieu_destination_coli;
    cotation.idboutique=this.boutiqueService.boutique.idBoutique;

    this.digixpresService.get_frais_livraison(cotation).subscribe(
      data => {
        this.commandeService.commande.fraislivraison = data;
        this.commandeService.commande.netaPayer += data;

      }, error => {
        this.authenService.toastMessage(error.error.message);
      }
    );
  }
  get_reference_lieu_enregist(){
    let ville=this.villes.find(v=>v.libelle_ville==this.boutiqueService.boutique.ville);
    let quartier=ville.quartierss.find(q=>q.libelle_quartier==this.boutiqueService.boutique.quartier);
    let secte=quartier.secteurs.find(s=>s.libelle_secteur==this.boutiqueService.boutique.secteur);
    this.secteur_lieu_enregistrement_coli=secte.reference;
  }

  commander() {
    this.adresse.phone_livraison=this.commandeService.commande.client.phone;
    this.commandeService.commande.adresse=this.adresse;
    this.commandeService.commande.modepayement="PAYEMENT A LA LIVRAISON";
    this.commandeService.commande.modecommande="ligne";
    this.commandeService.commande.phone=this.commandeService.commande.client.phone;
    this.commandeService.commande.nomclient=this.commandeService.commande.client.username;
    this.is_loading=true;
    this.commandeService.createCommande(this.commandeService.commande).subscribe(
      data=>{
        this.is_loading=false;
        data.type_facture="Facture";
        this.commandeService.commande=data;

      },error => {
        this.is_loading=false;
        this.authenService.toastMessage(error.error.message);
      },()=>{
        this.authenService.utilisateur.cart.cartItems=[];
        this.authenService.utilisateur.cart.montanttotal=0;
        localStorage.removeItem("utilisateur");
        localStorage.setItem('utilisateur',JSON.stringify(this.authenService.utilisateur));
        this.router.navigateByUrl('/client/payement')
      }
    )

  }
}
