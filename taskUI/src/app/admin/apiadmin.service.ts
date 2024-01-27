import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIADMINService {

  constructor(private http : HttpClient) { }

   ADMINAPI = 'http://localhost:4000';

  addEmp(data:any)
  {
    return this.http.post(this.ADMINAPI+'/admin/employee/add',data);;
  }

  getAllEmp()
  {
    return this.http.get(this.ADMINAPI+'/admin/employee');
  }

  addTask(data:any)
  {
    return this.http.post(this.ADMINAPI+'/admin/task/add',data)
  }

  getTaskData()
  {
    return this.http.get(this.ADMINAPI+'/admin/task');
  }

  manageempget()
  {
    return this.http.get(this.ADMINAPI+'/admin/manageempget');
  }
  manageempgetAdd(data:any){
    return this.http.post(this.ADMINAPI+'/admin/manageempget/add',data);
  }


}
