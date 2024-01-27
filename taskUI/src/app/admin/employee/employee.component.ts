import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { APIADMINService } from '../apiadmin.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  animal: string = '';
  name: string = '';
  dataSource :any[] = [];

  constructor(public dialog: MatDialog , private apiservice: APIADMINService) {}


  ngOnInit(){
    this.apiservice.getAllEmp().subscribe((res:any) => {
      // console.log(res.employeeList[0]);
      this.dataSource = res.employeeList;
      this.ngOnInit();
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddemployeeComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log('employee',result);
    });
  }



  displayedColumns = [
    'employeeid',
    'name',
    'tasks'
  ];
  // dataSource = ELEMENT_DATA;

}
// export interface PeriodicElement {
//   // employeeid: Number;
//   // name : String;
//   // tasks : String;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
//   { userid: 11, name : 'username', tasks: 'demo' },
// ];


