import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MainService} from "../../../../../shared/services/MainService";
import {ServiceCaisse} from "../../../../services/ServiceCaisse";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";

@Component({
  selector: 'app-transactionscaisse',
  templateUrl: './transactionscaisse.component.html',
  styleUrls: ['./transactionscaisse.component.scss'],
})
export class TransactionscaisseComponent implements OnInit {
  segmentModel: any;

  constructor(private router : Router, private mainService : MainService, public caisseService : ServiceCaisse, private autheService : AuthenService) { }

  ngOnInit() {
    this.caisseService.ventesTransactionsList=[];
    this.caisseService.directsTransactionsList=[];
     this.mainService.spinner.show()
      this.caisseService.getAllTransactionBySessionAndUser(this.caisseService.SessionActive.idcaissesession).subscribe(
        data=>{
          console.log(data);
          this.caisseService.caisseTransactionsList = data["content"];
        },error => {
          this.autheService.toastMessage(error.error.message);
          this.mainService.spinner.hide();
        },
        ()=> {
          this.mainService.spinner.hide();
          this.caisseService.caisseTransactionsList.forEach(ct=>{
            if(ct.typetransaction=="Entree en caisse" || ct.typetransaction=="Sortie de caisse"){
              this.caisseService.directsTransactionsList.push(ct);
            } else if (ct.typetransaction=="Vente en caisse"){
              this.caisseService.ventesTransactionsList.push(ct);
            }
          })
          this.segmentModel = "tout";
        }
      )
  }

  goBack() {
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }

  segmentChanged(e: any) {
    console.log('Segment changed', e.detail.value);
  }
}
