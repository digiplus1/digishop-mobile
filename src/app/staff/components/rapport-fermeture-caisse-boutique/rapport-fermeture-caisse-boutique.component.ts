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
import {MainService} from "../../../shared/services/MainService";
import {CheckRapportComponent} from "./check-rapport/check-rapport.component";
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
  constructor(
    public router : Router,
    public caisseService : ServiceCaisse,
    private authenticateService: AuthenService,
    public modalController : ModalController,
    public mainService: MainService,
    private boutiqueService: BoutiqueService
  ) { }

  ngOnInit() {
    //this.caissedto.dateouverture=new Date(this.date.getDate()+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear()+"  6:00:00");

    this.findAllSessionFermer();
    this.mainService.spinner.show();
    this.boutiqueService.getboutiqueByReference(this.authenticateService.utilisateur.referenceboutique).subscribe(
      data => {
        this.mainService.spinner.hide();
        this.boutiqueService.boutique = data;
        console.log(data);
      }, error => {
        this.mainService.spinner.hide();
        this.mainService.notificationService.showError(error.error.message);
      }
    )
  }

  findAllSessionFermer(){
    this.mainService.spinner.show();
    this.caisseService.findAllSessionFermer().subscribe(
      data=>{
        this.sessionfermers=data;
        this.mainService.spinner.hide();
      }
    )
  }

  getrapport(type:number){
    let date:Date=new Date();
    this.caissedto.referenceuser=this.authenticateService.utilisateur.reference;
    this.caissedto.referenceboutique=this.authenticateService.utilisateur.referenceboutique;
    if (type==1){
      this.caissedto.datefermeture=new Date(date);
    }else {
      this.caissedto.datefermeture=this.date;
    }
    this.caisseService.cloturerapportglobale(this.caissedto).subscribe(
      data=>{
        this.sessionFermer=data;
        this.sessionfermers.push(data);
        if (this.sessionFermer){
          this.openDetail(this.sessionFermer);
        }
      },error => {
        this.authenticateService.toastMessage(error.error.message);
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
    if (this.caissedto.dateouverture) this.getrapport(1);
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
    this.mainService.spinner.show();
    this.caisseService.getrapportBoutiqueByResferencesessionfermer(reference).subscribe(
      data => {
        this.mainService.spinner.hide();
        this.sessionFermer = data;
      },
      error => {
        this.mainService.spinner.hide();
        this.authenticateService.toastMessage(error.error.message);
      },
      () => {
        if (this.caissedto) {
          this.openDetail(this.sessionFermer);
        }
      }
    )
  }
  async openDetail(cT : SessionFermer) {
    const modal = await this.modalController.create({
      component: DetailsRapportFermetureGlobalComponent,
      componentProps: {
        'sessionFermer' : cT
      }
    });
    console.log(cT);
    return await modal.present();
  }
  async openCheck(cT : string[]) {
    const modal = await this.modalController.create({
      component: CheckRapportComponent,
      componentProps: {
        'checkRetour' : cT
      }
    });
    console.log(cT);
    return await modal.present();
  }
  checkcaisseouverte(){
    this.caisseService.checkCaisseOuverte(this.authenticateService.utilisateur.reference).subscribe(
      data=>{
        this.checkRetour=data;
      },
      error => {
        this.mainService.spinner.hide();
        this.authenticateService.toastMessage(error.error.message);
      },
      () => {
        if (this.checkRetour.length == 0) {
          this.getrapport(1);
        } else {
          this.openCheck(this.checkRetour);
        }
      }
    )
  }
}
