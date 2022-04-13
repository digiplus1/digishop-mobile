import {Injectable} from "@angular/core";
import {ServicePanier} from "./ServicePanier";
import {ServicePaiement} from "./ServicePaiement";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {ServiceProduit} from "./ServiceProduit";
import {CaisseTransactions} from "../models/CaisseTransactions";
import {BluetoothSerial} from "@ionic-native/bluetooth-serial/ngx";
import {Commande} from "../../Model/Commande";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {CaisseDTO} from "../models/CaisseDTO";
import {Storage} from "@ionic/storage";
import {ServiceBoutique} from "./ServiceBoutique";
import {ModalController} from "@ionic/angular";
import {PrinterlistComponent} from "../components/printerlist/printerlist.component";

@Injectable()
export class ServicePrinter {
  public bluetoothList : any [] = [];
  public selectedPrinter: any;
  public printVente: string = "";

  constructor(public servicePanier : ServicePanier, public servicePaiment : ServicePaiement, private bluetoothSerial: BluetoothSerial,
              public modalController : ModalController,  public authenService : AuthenService, public serviceProduit : ServiceProduit, public storage: Storage, public boutiqueService:ServiceBoutique,) {

  }
  async printerModal() {
    const modal = await this.modalController.create({
      component: PrinterlistComponent,
      cssClass: 'my-custom-css'
    });
    return await modal.present();
  }

async createStorage(){
  await this.storage.create();
}


  initializeTicketVenteBefore(transaction : CaisseTransactions){
    this.printVente=""
    let date: Date = new Date(transaction.datetransaction);
    this.printVente = "";
    this.printVente+="\n \t"+this.authenService.boutique.nomBoutique+"\n";
    this.printVente+="\n \t"+this.authenService.boutique.secteur+" "+this.authenService.boutique.quartier+" "+this.authenService.boutique.ville;
    this.printVente+="\n \tTEL: "+this.authenService.boutique.telephoneBoutique+"\n";
    this.printVente+="\n Bill: " + transaction.commande.referencecommande;
    this.printVente+="\n Date: " + date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+"\t Time: "+date.getHours()+":"+date.getMinutes();
    this.printVente+="\n Vendeur  : " + this.authenService.utilisateur.username;
    this.printVente+="\n Mode de paiement : \t" + transaction.typepaiement;
    this.printVente+="\n -------------------------------------------";    this.printVente+="\n Designation \t Quantite \t Montant";
    transaction.commande.cartItems.forEach(c=>{
      if(c.quantite!=0){
        this.printVente+="\n "+ c.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").substr(0,15)+"\t"+c.quantite+"\t"+c.montant+"XAF";
      }
    });
    this.printVente+="\n -------------------------------------------";
    this.printVente+="\n Montant Total :\t\t" + transaction.commande.montantcommande+"XAF";
    this.printVente+="\n -------------------------------------------";
    this.printVente+="\n Nous vous remercions pour  ." ;
    this.printVente+="\n vos achats auprés de nous." ;
    this.printVente+="\n Les Marchandises vendues ne " ;
    this.printVente+="\n sont ni reprises ni echangé " ;
    this.printVente+="\n \n \n \n \n \n" ;
    console.log(this.printVente)
    this.storage.get("printer").then(printer=>{
      this.selectedPrinter=printer;
    })
    if (this.selectedPrinter){
      this.sendToBluetoothPrinter( this.selectedPrinter, this.printVente);
    }else {
      this.printerModal();
      this.sendToBluetoothPrinter( this.selectedPrinter, this.printVente);
    }
    //this.printer.isAvailable().then();

  }





  searchBluetoothPrinter() {//This will return a list of bluetooth devices
    return this.bluetoothSerial.list();
  }
  connectToBluetoothPrinter(macAddress) {
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
            this.disconnectBluetoothPrinter();
            //if(test) this.disconnectBluetoothPrinter();
          },err=>{
            //If there is an error printing to bluetooth printer handle it here
            console.log(err);
            this.authenService.toastMessage("Echec d'impression");
            this.disconnectBluetoothPrinter();
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
