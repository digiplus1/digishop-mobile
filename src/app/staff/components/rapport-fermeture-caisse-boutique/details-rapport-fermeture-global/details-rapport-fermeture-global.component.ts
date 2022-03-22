import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSearchbar, IonSlides, ModalController, NavParams} from "@ionic/angular";
import {SessionFermer} from "../../dashboard/models/Session-fermer";
import {CaisseDTO} from "../../../models/CaisseDTO";
import * as XLSX from "xlsx";
import {BoutiqueService} from "../../../../client/Service/BoutiqueService";

@Component({
  selector: 'app-details-rapport-fermeture-global',
  templateUrl: './details-rapport-fermeture-global.component.html',
  styleUrls: ['./details-rapport-fermeture-global.component.scss'],
})
export class DetailsRapportFermetureGlobalComponent implements OnInit {
  @ViewChild('search', {static: false}) search: IonSearchbar;
  @ViewChild('slider', {static: false}) slider: IonSlides;
  segment: number = 0;
  cstemp : CaisseDTO;

  constructor(private modalController : ModalController, private navParam : NavParams,public boutiqueService:BoutiqueService) { }

  ngOnInit() {
    this.cstemp = this.navParam.get("caisse");
  }

  onPrint() {

  }


  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.cstemp.datefermeture+".xlsx");

  }


  exportCSV(){
    const wb = XLSX.utils.book_new()
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    XLSX.utils.book_append_sheet(wb, ws, 'test')
    XLSX.writeFile(wb, this.cstemp.datefermeture+'.csv')
  }
  segmentChanged(ev) {

    this.slider.slideTo(ev.target.value);
  }


  slideChanged() {
    this.slider.getActiveIndex().then(index => {
      this.segment = index;
    });
  }
  onDismiss() {
    this.modalController.dismiss();
  }

}
