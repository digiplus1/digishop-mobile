import { Component, OnInit } from '@angular/core';
import {ServiceDash} from "../../../../services/ServiceDash";
import {AuthenService} from "../../../../../home/components/Service/AuthenService";
import {ModalController} from "@ionic/angular";
import {Commande} from "../../../../../Model/Commande";

@Component({
  selector: 'app-vente-filter',
  templateUrl: './vente-filter.component.html',
  styleUrls: ['./vente-filter.component.scss'],
})
export class VenteFilterComponent implements OnInit {
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

  setCustomerPickerOptions(): void {
    this.customPickerOptionsDebut = {
      buttons: [{
        text: 'Annuler',
        role: 'cancel',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Effacer',
        handler: () => {
          this.serviceDash.datedebutV = null
        }
      }, {
        text: 'Selectionner',
        handler: (data) => {
          console.log('Data', data);
          let year: string = data.year.text;
          let month: string = data.month.value < 10 ? '0' + data.month.value.toString(): data.month.value.toString();
          let day: string = data.day.text;
          this.valueDebut = year + '-' + month + '-' + day + 'T00:00:00.000Z';
          this.serviceDash.datedebutVTemp = this.valueDebut;
          this.serviceDash.datedebutV = new Date(this.valueDebut);
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
          this.serviceDash.datefinV = null
        }
      }, {
        text: 'Selectionner',
        handler: (data) => {
          console.log('Data', data);
          let year: string = data.year.text;
          let month: string = data.month.value < 10 ? '0' + data.month.value.toString(): data.month.value.toString();
          let day: string = data.day.text;
          this.valueFin = year + '-' + month + '-' + day + 'T23:59:59.000Z';
          this.serviceDash.datefinVTemp = this.valueFin;
          this.serviceDash.datefinV = new Date(this.valueFin);
        }
      }]
    }
  }

  onFilter() {
    this.is_loading = true;

    let cmdList = this.serviceDash.commandeDTOList;

    if(this.serviceDash.modecommandeV){
      cmdList = cmdList.filter(c=> {
        return c.modecommande == this.serviceDash.modecommandeV;
      });
    }
    if(this.serviceDash.nomvendeurV){
      cmdList = cmdList.filter(c=> {
        return c.nomvendeur == this.serviceDash.nomvendeurV;
      });
    }
    if(this.serviceDash.modepaiementV){
      cmdList = cmdList.filter(c=> {
        return c.modepayement == this.serviceDash.modepaiementV;
      });
    }
    if(this.serviceDash.datedebutV){
      cmdList = cmdList.filter(c=> {
        return c.datecommande <= this.serviceDash.datedebutV;
      });
    }
    if(this.serviceDash.datefinV){
      cmdList = cmdList.filter(c=> {
        return c.datecommande == this.serviceDash.datefinV;
      });
    }

    this.serviceDash.commandeDTOListFilter = cmdList;
    this.serviceDash.montantVentes = 0;
    cmdList.forEach(c=>{
      this.serviceDash.montantVentes += (c.montantcommande + c.fraislivraison);
    })
    this.is_loading = false;
    this.onDismiss();
  }

  updateModeC(ev: any) {
    let val=ev.target.value;
    if (val=="tout"){
      this.serviceDash.modecommandeV=null;
    }else {
      this.serviceDash.modecommandeV = val;
    }
  }

  updateVendeur(ev: any) {
    let val=ev.target.value;
    if (val=="tout"){
      this.serviceDash.nomvendeurV=null;
    }else {
      this.serviceDash.nomvendeurV = val;
    }
  }

  updateModeP(ev: any) {
    let val=ev.target.value;
    if (val=="tout"){
      this.serviceDash.modepaiementV=null;
    }else {
      this.serviceDash.modepaiementV = val;
    }
  }

  updateDateDebut(ev: any) {
    this.serviceDash.datedebutV = ev.target.value;
  }

  updateDateFin(ev: any) {
    this.serviceDash.datefinV = ev.target.value;
  }
}
