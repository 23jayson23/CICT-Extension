import { Component, OnInit } from '@angular/core';
import { ModalAddEventComponent } from '../faculty-dashboard/modal-add-event/modal-add-event.component';
import { Dialog } from '@angular/cdk/dialog';


@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.scss']
})
export class FacultyDashboardComponent implements OnInit{


  constructor(public dialog:Dialog){}

  ngOnInit(): void {
    
    this.Addevent();

  }

  Addevent(){
   this.dialog.open(ModalAddEventComponent);
  }
  

}
