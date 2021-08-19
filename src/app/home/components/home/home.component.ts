import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  navigate(id: number) {
    if(id==1){
      this.router.navigateByUrl("/home/register")
    } else if(id==2){
      this.router.navigateByUrl("/home/login")
    }
  }
}
