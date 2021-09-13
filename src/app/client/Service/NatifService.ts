import {Injectable} from "@angular/core";
import {ToastController} from "@ionic/angular";
import {CallNumber} from "@ionic-native/call-number/ngx";
import {AuthenService} from "../../home/components/Service/AuthenService";
import {Router} from "@angular/router";
import { Share } from '@capacitor/share';
import {AdresseIP} from "../../Service/AdresseIP";
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner/ngx";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
@Injectable()
export class NatifService{

constructor(public toastController: ToastController,public callNumber:CallNumber,public router: Router,
            public authenservice: AuthenService,private qrScanner: QRScanner,private barcodeScanner: BarcodeScanner) {
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
      text: AdresseIP.host+url,
      url: image,
      dialogTitle: 'Digishop',
    }).then(result=>{
      this.authenservice.toastMessage(result.activityType)
    }) .catch(err => {
      this.authenservice.toastMessage(err)
    });
  }

  scannerQrcode(){
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
  scannerbarcode(){
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
  }).catch(err => {
    console.log('Error', err);
  });
}

}
