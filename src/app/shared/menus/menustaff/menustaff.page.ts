import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menustaff',
  templateUrl: './menustaff.page.html',
  styleUrls: ['./menustaff.page.scss'],
})
export class MenustaffPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public menus=[
    {title:"Gestion de Caisse",url:"/menu/caisse",icon:"assets/images/caisse.jpeg"},
    {title:"A propos de nous",url:"/menu/about",icon:"assets/images/about.jpeg"},
    {title:"Déconnexion",url:"/home",icon:"assets/images/logout.jpeg"},
  ];

  onMenuAction(url: string) {

  }
}
