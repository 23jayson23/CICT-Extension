import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInFacultyComponent } from './sign-in-faculty/sign-in-faculty.component';


const routes: Routes = [
  {path: '', component: SignInFacultyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
