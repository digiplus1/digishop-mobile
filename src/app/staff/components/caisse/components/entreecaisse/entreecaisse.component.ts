import { Component, OnInit } from '@angular/core';
import {ServiceCaisse} from "../../../../services/ServiceCaisse";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {CaisseDTO} from "../../../../models/CaisseDTO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-entreecaisse',
  templateUrl: './entreecaisse.component.html',
  styleUrls: ['./entreecaisse.component.scss'],
})
export class EntreecaisseComponent implements OnInit {
  montant : number=0;
  commentaire : string="";
  is_loading: boolean=false;

  constructor(public authenService : AuthenService, public caisseService : ServiceCaisse, private router : Router) { }

  ngOnInit() {
  }

  onAction() {
    this.is_loading=true;
    console.log(this.montant + ' ++++----- ' + this.commentaire)
    if(this.montant<0 || this.montant==null || this.commentaire == ""){
      this.authenService.toastMessage("Tous les champs doivent être correctement remplis.")
      this.is_loading = false;
    } else {
      let cDTO : CaisseDTO = new CaisseDTO();
      cDTO.action="entree";
      cDTO.idcaissesession = this.caisseService.SessionActive.idcaissesession;
      cDTO.nomuser = this.authenService.utilisateur.username;
      cDTO.montanttransaction = this.montant;
      cDTO.commentaire = this.commentaire;

      this.caisseService.ManageCaisse(cDTO).subscribe(
        data=>{
          console.log(data)
          this.caisseService.caisseDTOTemp=data;
        },error => {
          this.authenService.toastMessage(error.error.message);
          this.is_loading=false;
        },
        ()=> {
          this.caisseService.SessionActive.soldesession = this.caisseService.caisseDTOTemp.soldesession;
          this.caisseService.caisseTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
          this.caisseService.directsTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
          this.is_loading = false;
          this.authenService.toastMessage("Opération réussie!")
        }
      );
    }

  }

  goBack() {
    this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
  }
}
