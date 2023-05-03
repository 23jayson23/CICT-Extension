import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SignInFacultyComponent } from './sign-in-faculty/sign-in-faculty.component';
import { SignUpFacultyComponent } from './sign-up-faculty/sign-up-faculty.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgramComponent } from './program/program.component';
import { AdminManageAccountComponent } from './admin-manage-account/admin-manage-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SignInFacultyComponent,
    SignUpFacultyComponent,
    ProgramComponent,
    AdminManageAccountComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
