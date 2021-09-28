import { Component, OnInit } from '@angular/core';
import {ServiceUtilisateur} from "../../../../services/ServiceUtilisateur";
import {MainService} from "../../../../../shared/services/MainService";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {AppUser} from "../../../../../home/models/appUser";

@Component({
  selector: 'app-listvendeur',
  templateUrl: './listvendeur.component.html',
  styleUrls: ['./listvendeur.component.scss'],
})
export class ListvendeurComponent implements OnInit {
  search: string="";
  vendeurs : AppUser []= [];

  constructor(public serviceUser : ServiceUtilisateur, private mainService : MainService, private authenService : AuthenService) { }

  ngOnInit() {
    this.mainService.spinner.show();

    this.serviceUser.getAllVendeurs(this.authenService.utilisateur.nomBoutique).subscribe(
      data=>{
        console.log(data)
        this.serviceUser.vendeursList = data;
        this.vendeurs = data;
        this.mainService.spinner.hide();
      }, error => {
        this.mainService.spinner.hide()
        this.authenService.toastMessage(error.error.message)
      }
    )
  }

  FilterElement(ev: any) {
    if(ev != null) {
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.serviceUser.vendeursListFilter = this.serviceUser.vendeursList.filter((a) => {
          return (a.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        this.vendeurs = this.serviceUser.vendeursListFilter;
      } else this.serviceUser.vendeursListFilter = [];
    } else {
      this.serviceUser.vendeursListFilter = [];
    }
  }

  selectUser(user: AppUser) {
    this.vendeurs = this.serviceUser.vendeursListFilter.filter(u=> {return u.username == user.username});
    this.search = "";
    this.FilterElement(null);
  }

  showDetails(user: AppUser) {

  }

  desactiveUser(user: AppUser) {

  }
}
