import { Component, OnInit } from '@angular/core';
import {NatifService} from "../../Service/NatifService";

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss'],
})
export class AproposComponent implements OnInit {

  constructor(public natifService:NatifService) { }

  ngOnInit() {}

}
