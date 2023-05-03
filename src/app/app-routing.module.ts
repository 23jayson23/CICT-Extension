import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInFacultyComponent } from './sign-in-faculty/sign-in-faculty.component';
import { SignUpFacultyComponent } from './sign-up-faculty/sign-up-faculty.component';

const routes: Routes = [
  {path: '', component: SignInFacultyComponent},
  {path: 'sign-up', component: SignUpFacultyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
