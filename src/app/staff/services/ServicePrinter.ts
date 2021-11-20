import {Injectable} from "@angular/core";
import {ServicePanier} from "./ServicePanier";
import {ServicePaiement} from "./ServicePaiement";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ServiceProduit} from "./ServiceProduit";
import {CaisseTransactions} from "../models/CaisseTransactions";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial/ngx";


@Injectable()
export class ServicePrinter {
  public bluetoothList : any [] = [];
  public selectedPrinter: any;
  public printVente: string = "";

  constructor(public servicePanier : ServicePanier, public servicePaiment : ServicePaiement, private bluetoothSerial: BluetoothSerial,
              public authenService : AuthenService, public serviceProduit : ServiceProduit) {
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
    //this.printer.isAvailable().then();

  }

  initializeTicketVenteBefore(transaction : CaisseTransactions){
    let date: Date = new Date(transaction.datetransaction);
    this.printVente = "";
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
    //this.printer.isAvailable().then();

  }

  searchBluetoothPrinter()
  {//This will return a list of bluetooth devices
    return this.bluetoothSerial.list();
  }

  connectToBluetoothPrinter(macAddress)
  {
//This will connect to bluetooth printer via the mac address provided
    return this.bluetoothSerial.connect(macAddress)
  }

  disconnectBluetoothPrinter()
  {
//This will disconnect the current bluetooth connection
    return this.bluetoothSerial.disconnect();}

  sendToBluetoothPrinter(macAddress,data_string)
  {
    //1. Try connecting to bluetooth printer
    this.connectToBluetoothPrinter(macAddress)
      .subscribe(_=>{
        //2. Connected successfully
        console.log(data_string);
        this.bluetoothSerial.write(data_string)
          .then(_=>{
            //3. Print successful If you want to tell user print is successful, handle it here
            // 4. IMPORTANT! Disconnect bluetooth after printing
            this.authenService.toastMessage("Impression réussie");
            //if(test) this.disconnectBluetoothPrinter();
          },err=>{
            //If there is an error printing to bluetooth printer handle it here
            console.log(err);
            this.authenService.toastMessage("Echec d'impression");
          })
      },err=>{
        console.log(err);
        this.authenService.toastMessage("Echec d'impression");
        //if(test) this.disconnectBluetoothPrinter();
        //If there is an error connecting to bluetooth printer
        //handle it here
      })
  }
}
