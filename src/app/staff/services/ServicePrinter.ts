import {Injectable} from "@angular/core";
import {ServicePanier} from "./ServicePanier";
import {ServicePaiement} from "./ServicePaiement";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ServiceProduit} from "./ServiceProduit";
import {CaisseTransactions} from "../models/CaisseTransactions";
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';


@Injectable()
export class ServicePrinter {

  private printVente: string = "";

  constructor(public servicePanier : ServicePanier, public servicePaiment : ServicePaiement,
              public authenService : AuthenService, public serviceProduit : ServiceProduit,private printer: Printer) {
  }

  initializeTicketVente(){
    this.printVente = "";
    this.printVente+="\n \t \tTicket de caisse \n\n";
    this.printVente+="\n" + new Date().toString();
    this.printVente+="\n Boutique : " + this.authenService.boutique.nomBoutique;
    this.printVente+="\n Vendeur  : " + this.authenService.utilisateur.username;
    this.printVente+="\n -----------------------------";
    this.printVente+="\n Designation \t Quantite \t Montant";
    this.servicePanier.panierCaisse.cartItems.forEach(c=>{
      if(c.quantite!=0){
        this.printVente+="\n "+ c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "")+"    "+c.quantite+"   "+"    "+c.montant;
      }
    });
    this.printVente+="\n Montant Total : \t" + this.servicePanier.panierCaisse.montanttotal;
    this.printVente+="\n Mode de paiement : \t" + this.servicePaiment.affiche;

    this.printVente+="\n \t Merci pour votre visite!!!" ;
    this.printVente+="\n \n \n \n \n \n" ;
    console.log(this.printVente)
  }

  initializeTicketVenteAfter(transaction : CaisseTransactions){
    let date: Date = new Date(transaction.datetransaction);
    this.printVente = "";
    this.printVente+="\n \t \t {{DUPLICATA}} \n\n";
    this.printVente+="\n \t \tTicket de caisse  \n\n";
    this.printVente+="\n" + transaction.commande.referencecommande;
    this.printVente+="\n" + date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+"  "+date.getHours()+":"+date.getMinutes();
    this.printVente+="\n Boutique : " + this.authenService.utilisateur.nomBoutique;
    this.printVente+="\n Vendeur  : " + this.authenService.utilisateur.username;
    this.printVente+="\n -----------------------------";
    this.printVente+="\n Designation \t Quantite \t Montant";
    transaction.commande.cartItems.forEach(c=>{
      if(c.quantite!=0){
        this.printVente+="\n "+ c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "")+"    "+c.quantite+"    "+"   "+c.montant;
      }
    });
    this.printVente+="\n Montant Total : \t" + transaction.commande.montantcommande;
    this.printVente+="\n \n Mode de paiement : \t" + transaction.typepaiement;

    this.printVente+="\n \t Merci pour votre visite!!!" ;
    this.printVente+="\n \n \n \n \n \n" ;
    console.log(this.printVente)
    this.printer.isAvailable().then();

    let options: PrintOptions = {
      name: 'MyDocument',
      duplex: true,
      orientation: 'landscape',
      monochrome: true
    }

    this.printer.print(this.printVente, options).then();
  }
}
