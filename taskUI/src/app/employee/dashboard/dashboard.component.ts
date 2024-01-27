import { Component } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpAPIService } from '../emp-api.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  animal: string = '';
  name: string = '';
  _id:any;

  constructor(public dialog: MatDialog,private apiservice:EmpAPIService,private SharedService : SharedService) {
    this._id = this.SharedService.getUserId();
  }

  ngOnInit()
  {
    this.apiservice.dashboardData(this._id).subscribe((res:any)=> {
      console.log(res);
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log('employee',result);
    });
  }












  displayedColumns = [
    'yourtasks',
    'status'
  ];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  yourtasks: String;
  status : String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { yourtasks: 'create backend', status: 'complete' },
  { yourtasks: 'create backend', status: 'complete' },
  { yourtasks: 'create backend', status: 'complete' },
  { yourtasks: 'create backend', status: 'complete' },
  { yourtasks: 'create backend', status: 'complete' },

];

