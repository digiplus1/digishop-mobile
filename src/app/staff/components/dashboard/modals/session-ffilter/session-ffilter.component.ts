import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ModalController} from "@ionic/angular";
import {SessionFermee} from "../../models/SessionFermee";

@Component({
  selector: 'app-session-ffilter',
  templateUrl: './session-ffilter.component.html',
  styleUrls: ['./session-ffilter.component.scss'],
})
export class SessionFFilterComponent implements OnInit {
  is_loading: boolean = false;
  public customPickerOptionsDebut:any;
  public customPickerOptionsFin:any;
  private valueDebut: string;
  private valueFin: string;

  constructor(public serviceDash : ServiceDash,
              public authenservice : AuthenService, private modalController : ModalController) { }

  ngOnInit() {
    this.setCustomerPickerOptions();
  }

  onDismiss() {
    this.modalController.dismiss()
  }

  updateVendeur(ev: any) {
    this.serviceDash.nomvendeurF = ev.target.value;
  }

  updateDateDebut(ev: any) {
    this.serviceDash.datedebutF = ev.target.value;
  }

  updateDateFin(ev: any) {
    this.serviceDash.datefinF = ev.target.value;
  }

  setCustomerPickerOptions(): void {
    this.customPickerOptionsDebut = {
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Effacer',
        handler: () => {
          this.serviceDash.datedebutF = null
        }
      }, {
        text: 'Selectionner',
        handler: (data) => {
          console.log('Data', data);
          let year: string = data.year.text;
          let month: string = data.month.value < 10 ? '0' + data.month.value.toString(): data.month.value.toString();
          let day: string = data.day.text;
          this.valueDebut = year + '-' + month + '-' + day + 'T00:00:00.000Z';
          this.serviceDash.datedebutFTemp = this.valueDebut;
          this.serviceDash.datedebutF = new Date(this.valueDebut);
        }
      }]
    }

    this.customPickerOptionsFin = {
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Effacer',
        handler: () => {
          this.serviceDash.datefinF = null
        }
      }, {
        text: 'Selectionner',
        handler: (data) => {
          console.log('Data', data);
          let year: string = data.year.text;
          let month: string = data.month.value < 10 ? '0' + data.month.value.toString(): data.month.value.toString();
          let day: string = data.day.text;
          this.valueFin = year + '-' + month + '-' + day + 'T23:59:59.000Z';
          this.serviceDash.datefinFTemp = this.valueFin;
          this.serviceDash.datefinF = new Date(this.valueFin);
        }
      }]
    }
  }

  onFilter() {
    this.is_loading = true;

    let sessionF : SessionFermee = new SessionFermee();
    sessionF.nomuser = this.authenservice.utilisateur.username;
    sessionF.nomboutique = this.authenservice.utilisateur.nomBoutique;
    sessionF.nomvendeur = this.serviceDash.nomvendeurF;
    sessionF.datedebut = this.serviceDash.datedebutF;
    sessionF.datefin = this.serviceDash.datefinF;

    this.serviceDash.checkSessionFermeeInShop(sessionF).subscribe(
      data=>{
        console.log(data);
        this.serviceDash.sessionFermeeList=data;
        this.is_loading = false;
        this.onDismiss()
      }, error => {
        this.is_loading = false;
        this.authenservice.toastMessage(error.error.message)
        this.onDismiss()
      }
    )
  }
}
