import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { ProgramPostComponent } from '../admin/program-post/program-post.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(public dialog: Dialog){}

  programpost(){

    this.dialog.open<string>(ProgramPostComponent);
  }
}
