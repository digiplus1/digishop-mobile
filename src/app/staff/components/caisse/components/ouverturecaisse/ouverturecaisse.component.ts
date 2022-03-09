import { Component, OnInit } from '@angular/core';
import {CaisseDTO} from "../../../../models/CaisseDTO";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ServiceCaisse} from "../../../../services/ServiceCaisse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ouverturecaisse',
  templateUrl: './ouverturecaisse.component.html',
  styleUrls: ['./ouverturecaisse.component.scss'],
})
export class OuverturecaisseComponent implements OnInit {
  montant : number=0;
  commentaire : string="";
  is_loading: boolean=false;

  constructor(public authenService : AuthenService, public caisseService : ServiceCaisse, private router : Router) { }

  ngOnInit() {}

  onAction() {
    this.is_loading=true;
    console.log(this.montant + ' ++++----- ' + this.commentaire)
    if(this.montant<0 || this.commentaire == ""){
      this.authenService.toastMessage("Tous les champs doivent être correctement remplis.")
      this.is_loading = false;
    } else {
      let cDTO : CaisseDTO = new CaisseDTO();
      cDTO.action="open";
      cDTO.referenceuser = this.authenService.utilisateur.reference;
      cDTO.montantinitial = this.montant;
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
          this.caisseService.SessionActive = this.caisseService.caisseDTOTemp;
          this.caisseService.caisseTransactionsList.push(this.caisseService.caisseDTOTemp.caisseTransaction);
          this.is_loading = false;
          this.authenService.toastMessage("Ouverture de caisse réussie!")
          this.router.navigateByUrl("/staff/menustaff/caisse/accueil")
        }
      );
    }

    }
}
