import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpAPIService {
  private token: any;
  private setHeaders() {
    this.token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    });
  }

  

  constructor(private http:HttpClient) { }
  EMPAPI = 'http://localhost:4000';

  login(data:any)
  {
    const headers = this.setHeaders();
    return this.http.post(this.EMPAPI+'/authemp/login',data, {headers});
  }

  dashboardData(_id:any)
  {
    const headers = this.setHeaders();
    return this.http.post(this.EMPAPI+'/employee/dashboard',{_id:_id});
  }
}
