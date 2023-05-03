import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInFacultyComponent } from './sign-in-faculty/sign-in-faculty.component';
import { SignUpFacultyComponent } from './sign-up-faculty/sign-up-faculty.component';
import { AdminComponent } from './admin/admin.component';
import { ProgramComponent } from './program/program.component';

const routes: Routes = [
  {path: '', component: SignInFacultyComponent},
  {path: 'sign-up', component: SignUpFacultyComponent},
  {path: 'admin-page', component: AdminComponent},
  {path: 'program', component: ProgramComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
