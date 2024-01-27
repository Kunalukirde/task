import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtaskComponent } from '../addtask/addtask.component';
import { APIADMINService } from '../apiadmin.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  animal: string = '';
  name: string = '';
  dataSource:any[] = [];

  constructor(public dialog: MatDialog, private apiservice:APIADMINService) {}

  ngOnInit()
  {
    this.apiservice.getTaskData().subscribe((res:any) =>{
      this.dataSource = res.taskData;
      // console.log(this.dataSource);
      this.ngOnInit();
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddtaskComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log('employee',result);
    });
  }

  displayedColumns = [
    'taskname',
    'employeename',
    'status'
  ];
  // dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  tasks: String;
  name : String;
  status : String;

}