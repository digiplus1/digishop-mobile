import {Component, OnInit, ViewChild} from '@angular/core';
import * as XLSX from "xlsx";
import {CaisseDTO} from "../../models/CaisseDTO";
import {Router} from "@angular/router";
import {ServiceCaisse} from "../../services/ServiceCaisse";
import {ServiceDash} from "../../services/ServiceDash";
import {BoutiqueService} from "../../../client/Service/BoutiqueService";
import {IonSearchbar, IonSlides, ModalController} from "@ionic/angular";
import {ServiceBoutique} from "../../services/ServiceBoutique";
import {SessionFermer} from "../dashboard/models/Session-fermer";
import {AuthenService} from "../../../home/components/Service/AuthenService";
import {RapportFermetureComponent} from "../dashboard/modals/rapport-fermeture/rapport-fermeture.component";
import {DetailsRapportFermetureGlobalComponent} from "./details-rapport-fermeture-global/details-rapport-fermeture-global.component";
@Component({
  selector: 'app-rapport-fermeture-caisse-boutique',
  templateUrl: './rapport-fermeture-caisse-boutique.component.html',
  styleUrls: ['./rapport-fermeture-caisse-boutique.component.scss'],
})
export class RapportFermetureCaisseBoutiqueComponent implements OnInit {
  @ViewChild('search', {static: false}) search: IonSearchbar;
  @ViewChild('slider', {static: false}) slider: IonSlides;
  public segment: number = 0;
  public caissedto: CaisseDTO=new CaisseDTO();
  public sessionfermers: SessionFermer[] = [];
  public sessionFermer: SessionFermer;
  public date:Date=new Date();
  public checkRetour: string[];
  constructor(public router : Router, public caisseService : ServiceCaisse,public boutiqueService:ServiceBoutique,
              private authenticateService: AuthenService, public modalController : ModalController) { }

  ngOnInit() {
    //this.caissedto.dateouverture=new Date(this.date.getDate()+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear()+"  6:00:00");

    this.findAllSessionFermer();
  }

  findAllSessionFermer(){
    this.caisseService.findAllSessionFermer().subscribe(
      data=>{
        this.sessionfermers=data;
      }
    )
  }

  getrapport(){
    this.caissedto.referenceuser=this.caisseService.authenService.utilisateur.reference;
    this.caissedto.referenceboutique=this.caisseService.authenService.utilisateur.referenceboutique;
    this.caisseService.getrapportBoutique(this.caissedto).subscribe(
      data=>{
        data.cartItems.forEach(c=>{
          c.montant=c.montant*0.8075;
        });
        data.totalvente=data.totalvente**0.8075;
        this.caissedto=data;
      },error => {
        this.caisseService.authenService.toastMessage(error.error.message)
      }
    )
  }

  today =new Date().toISOString();
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.today+".xlsx");

  }


  exportCSV(){
    const wb = XLSX.utils.book_new()
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    XLSX.utils.book_append_sheet(wb, ws, 'test')
    XLSX.writeFile(wb, this.today+'.csv')
  }

  filtrerPaDate(event: any) {
    this.caissedto.dateouverture=event.target.value;
    if (this.caissedto.dateouverture) this.getrapport();
  }

  onPrint() {

  }
  segmentChanged(ev) {

    this.slider.slideTo(ev.target.value);
  }


  slideChanged() {
    this.slider.getActiveIndex().then(index => {
      this.segment = index;
    });
  }

  getdetailrapport(reference: string) {
    this.caisseService.getrapportBoutiqueByResferencesessionfermer(reference).subscribe(
      data => {
        data.cartItems.forEach(c=>{
          c.montant=c.montant*0.8075;
        });
        data.totalvente=data.totalvente**0.8075;
        this.caissedto=data;
        if (this.caissedto) {
          this.openDetail(this.caissedto);
        }
      },
      error => {
        this.authenticateService.toastMessage(error.error.message);
      }
    )
  }
  async openDetail(cT : CaisseDTO) {
    console.log(cT);
    const modal = await this.modalController.create({
      component: DetailsRapportFermetureGlobalComponent,
      componentProps: {
        'caisse' : cT
      }
    });
    return await modal.present();
  }
}
