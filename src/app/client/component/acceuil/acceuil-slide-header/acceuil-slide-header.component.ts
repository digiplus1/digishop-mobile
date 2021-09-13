import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-acceuil-slide-header',
  templateUrl: './acceuil-slide-header.component.html',
  styleUrls: ['./acceuil-slide-header.component.scss'],
})
export class AcceuilSlideHeaderComponent {

  @Input() title:string;
  constructor() { }


}
