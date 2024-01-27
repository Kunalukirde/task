import { Component } from '@angular/core';
import { ManageemployeeComponent } from '../manageemployee/manageemployee.component';
import { MatDialog } from '@angular/material/dialog';
import { APIADMINService } from '../apiadmin.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
  animal: string = '';
  name: string = '';
  dataSource:any[] = [];

  constructor(public dialog: MatDialog, private apiservice : APIADMINService) {}


  ngOnInit()
  {
    this.apiservice.manageempget().subscribe((res:any)=> {
      console.log(res);
      this.dataSource = res.manageEmployee;
      this.ngOnInit();
      
    })
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(ManageemployeeComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.animal = result;
      console.log('employee',result);
    });
  }

  displayedColumns = [
    '_id',
    'username',
    'role'
  ];

}