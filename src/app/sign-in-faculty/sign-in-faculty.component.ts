import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-faculty',
  templateUrl: './sign-in-faculty.component.html',
  styleUrls: ['./sign-in-faculty.component.scss']
})
export class SignInFacultyComponent {

  constructor(public route:Router){}

  login(){
    this.route.navigate(["admin-page"])
  }

  signup(){
    this.route.navigate(["sign-up"])
  }

}
