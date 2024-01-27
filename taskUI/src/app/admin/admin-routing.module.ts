import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManageComponent } from './manage/manage.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
  {path : '', redirectTo:'login', pathMatch:'full'},
  {path : 'login', component : LoginComponent},
  {path : 'dashboard', component:DashboardComponent},
  {path : 'user' , component: EmployeeComponent},
  {path :'manage', component :ManageComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'addemployee', component: AddemployeeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
