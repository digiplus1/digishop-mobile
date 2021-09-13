import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AuthenService} from "./home/components/Service/AuthenService";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router, public authenservice: AuthenService) {
    this.login();
  }

  login(){
    this.authenservice.verifierLocalStorage();
  }
}
