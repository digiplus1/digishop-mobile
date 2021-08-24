import { Component, OnInit } from '@angular/core';
import {AppUser} from "../../models/appUser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userTemp : AppUser = new AppUser();
  confirmPass : string = "";

  constructor() { }

  ngOnInit() {}

  registerA() {

  }
}
