import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SignInFacultyComponent } from './sign-in-faculty/sign-in-faculty.component';
import { SignUpFacultyComponent } from './sign-up-faculty/sign-up-faculty.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SignInFacultyComponent,
    SignUpFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
