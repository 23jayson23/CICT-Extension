import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInFacultyComponent } from './sign-in-faculty/sign-in-faculty.component';
import { SignUpFacultyComponent } from './sign-up-faculty/sign-up-faculty.component';
import { AdminComponent } from './admin/admin.component';
import { ProgramComponent } from './program/program.component';
import { AdminManageAccountComponent } from './admin-manage-account/admin-manage-account.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';

const routes: Routes = [
  {path: '', component: SignInFacultyComponent},
  {path: 'sign-in', component: SignInFacultyComponent},
  {path: 'sign-up', component: SignUpFacultyComponent},
  {path: 'admin-page', component: AdminComponent},
  {path: 'program', component: ProgramComponent},
  {path: 'manage-account', component: AdminManageAccountComponent},
  {path: 'partnership', component: PartnershipComponent},
  {path: 'faculty', component: FacultyDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
