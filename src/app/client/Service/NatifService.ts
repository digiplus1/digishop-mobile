import {Injectable} from "@angular/core";
import {ToastController} from "@ionic/angular";
import {CallNumber} from "@ionic-native/call-number/ngx";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import { Share } from '@capacitor/share';
import {AdresseIP} from "../../Service/AdresseIP";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {BoutiqueService} from "./BoutiqueService";
import {ProduitService} from "./ProduitService";
@Injectable()
export class NatifService{

constructor(public toastController: ToastController,public callNumber:CallNumber,public router: Router,public boutiqueService:BoutiqueService,
            public authenservice: AuthenService,private barcodeScanner: BarcodeScanner,public produitService:ProduitService) {
}

  callnumber(number:string){
    this.callNumber.callNumber(number, true)
      .then(res => {
        this.authenservice.toastMessage(res)
      })
      .catch(err => {
        this.authenservice.toastMessage(err)
      });
  }

  async share(image:string,url:string){

    await Share.share({
      text: image,
      url: AdresseIP.host+url,
      dialogTitle: 'Digishop',
    }).then(result=>{
      this.authenservice.toastMessage(result.activityType)
    }) .catch(err => {
      this.authenservice.toastMessage(err)
    });
  }

  scannerbarcode(type:string){
  this.barcodeScanner.scan().then(barcodeData => {
    if (type=="produit"){
      this.produitService.getProduitByQrcode(barcodeData.text);
    }else {
      this.boutiqueService.getBoutiqueByqrcode(barcodeData.text);
    }
  }).catch(err => {
    console.log('Error', err);
  });
}

}
