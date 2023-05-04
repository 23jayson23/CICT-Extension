import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-faculty',
  templateUrl: './sign-up-faculty.component.html',
  styleUrls: ['./sign-up-faculty.component.scss']
})
export class SignUpFacultyComponent {

constructor(public route:Router){}

  login(){
    this.route.navigate(["sign-in"])
  }
}
