import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpAPIService } from '../emp-api.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  username:any='';
  _id:any;

  constructor(private router : Router,private apiservice:EmpAPIService,private SharedService : SharedService) {
    this._id = this.SharedService.getUserId() } 


  ngOnInit()
  {
    this.apiservice.dashboardData(this._id).subscribe((res:any)=> {
      console.log(res);
      this.username = res.employee.username;
    })
  }

  isLinkActive(route:string):boolean
  {
    return this.router.isActive(route,true);
  }

}
