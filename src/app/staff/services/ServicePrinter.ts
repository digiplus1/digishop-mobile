import {Injectable} from "@angular/core";
import {ServicePanier} from "./ServicePanier";
import {ServicePaiement} from "./ServicePaiement";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ServiceProduit} from "./ServiceProduit";
import {CaisseTransactions} from "../models/CaisseTransactions";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial/ngx";
import {Commande} from "../../Model/Commande";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";


@Injectable()
export class ServicePrinter {
  public bluetoothList : any [] = [];
  public selectedPrinter: any;
  public printVente: string = "";

  constructor(public servicePanier : ServicePanier, public servicePaiment : ServicePaiement, private bluetoothSerial: BluetoothSerial,
              public authenService : AuthenService, public serviceProduit : ServiceProduit,private barcodeScanner: BarcodeScanner) {
  }




  initializeTicketVente(){
    this.printVente = "";
    this.printVente+="\n \t \tTicket de caisse \n\n";
    this.printVente+="\n" + new Date().toString();
    this.printVente+="\n Boutique : " + this.authenService.boutique.nomBoutique;
    this.printVente+="\n Vendeur  : " + this.authenService.utilisateur.username;
    this.printVente+="\n --------------------------------------";
    this.printVente+="\n Designation \t Quantite \t Montant";
    this.servicePanier.panierCaisse.cartItems.forEach(c=>{
      if(c.quantite!=0){
        this.printVente+="\n "+ c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substr(0,15)+"    "+c.quantite+"   "+"    "+c.montant;
      }
    });
    this.printVente+="\n Montant Total : \t" + this.servicePanier.panierCaisse.montanttotal;
    this.printVente+="\n Mode de paiement : \t" + this.servicePaiment.affiche;

    this.printVente+="\n \t Merci pour votre visite!!!" ;
    this.printVente+="\n \n \n \n \n \n" ;
    console.log(this.printVente)
  }

  initializeTicketVenteAfter(transaction : CaisseTransactions){
    this.printVente=""
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
        this.printVente+="\n "+ c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substr(0,15)+" \t "+c.quantite+" \t"+" \t "+c.montant+"XAF";
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
    this.printVente=""
    let date: Date = new Date(transaction.datetransaction);
    this.printVente = "";
    this.printVente+="\n \t \tTicket de caisse  \n\n";
    this.printVente+="\n" + transaction.commande.referencecommande;
    this.printVente+="\n" + date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+"  "+date.getHours()+":"+date.getMinutes();
    this.printVente+="\n Boutique : " + this.authenService.utilisateur.nomBoutique;
    this.printVente+="\n Vendeur  : " + this.authenService.utilisateur.username;
    this.printVente+="\n -------------------------------------";
    this.printVente+="\n Designation \t Quantite \t Montant";
    transaction.commande.cartItems.forEach(c=>{
      if(c.quantite!=0){
        this.printVente+="\n "+ c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substr(0,15)+"  \t   "+c.quantite+"  \t   "+"  \t  "+c.montant+"XAF";
      }
    });
    this.printVente+="\n Montant Total : \t" + transaction.commande.montantcommande+"XAF";
    this.printVente+="\n \n Mode de paiement : \t" + transaction.typepaiement;

    this.printVente+="\n \t Merci pour votre visite!!!" ;
    this.printVente+="\n \n \n \n \n \n" ;
    console.log(this.printVente)
    this.selectedPrinter=localStorage.getItem("printer")
    this.sendToBluetoothPrinter(this.selectedPrinter, this.printVente);
    //this.printer.isAvailable().then();

  }

  initializeTicketClient(cmd : Commande){
    let date: Date = new Date(cmd.datecommande);
    this.printVente=""
    this.printVente+="\n \t Facture \n\n";
    this.printVente+="\n" + date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+"  "+date.getHours()+":"+date.getMinutes();
    this.printVente+="\n Boutique : " + this.authenService.boutique.nomBoutique;
    this.printVente+="\n Contact : " + this.authenService.boutique.telephoneBoutique;
    this.printVente+="\n Vendeur  : " + this.authenService.utilisateur.username;
    this.printVente+="\n -------------------------------------";
    this.printVente+="\n Client  : " + this.authenService.user_vendeur.username;
    this.printVente+="\n -------------------------------------";
    this.printVente+="\n Designation \t Quantite \t Montant";
    cmd.cartItems.forEach(c=>{
      this.printVente+="\n "+ c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "")+"\t"+c.quantite+"\t"+"\t"+c.montant;
    });
    this.printVente+="\n Frais de livraison :  \t" + cmd.fraislivraison;
    this.printVente+="\n Montant HT : \t" + ((cmd.montantcommande) - (cmd.montantcommande * 0.1925)).toFixed(1)+"XAF";
    this.printVente+="\n Montant TVA : \t" + (cmd.montantcommande * 0.1925).toFixed(1)+"XAF";
    this.printVente+="\n Montant TTC : \t" + cmd.montantcommande.toFixed(1)+"XAF";

    this.printVente+="\n Merci pour votre visite!!!" ;
    this.printVente+="\n \n \n" ;
    this.selectedPrinter=localStorage.getItem("printer")
    this.sendToBluetoothPrinter(this.selectedPrinter, this.printVente);
    console.log(this.printVente)
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
