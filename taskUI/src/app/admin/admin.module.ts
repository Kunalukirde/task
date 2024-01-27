import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { TasksComponent } from './tasks/tasks.component';
import { ManageComponent } from './manage/manage.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {
  MatDialog,  MAT_DIALOG_DATA,  MatDialogRef,  MatDialogTitle,  MatDialogContent,  MatDialogActions,  MatDialogClose, MatDialogModule,
} from '@angular/material/dialog';
import { AddtaskComponent } from './addtask/addtask.component';
import { ManageemployeeComponent } from './manageemployee/manageemployee.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    EmployeeComponent,
    TasksComponent,
    ManageComponent,
    LoginComponent,
    AddemployeeComponent,
    AddtaskComponent,
    ManageemployeeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatGridListModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,

  ]
})
export class AdminModule { }
