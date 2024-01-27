import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpAPIService } from '../emp-api.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginfrm! : FormGroup;
  constructor(private fb: FormBuilder, private router:Router,private EmpApiService:EmpAPIService,private userService:SharedService) {
    this.loginfrm = this.fb.group({
      userid: ['', [Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  ngOnInit()
  {

  }


  onSubmit() {
    if (this.loginfrm.valid) {
      const formValues = this.loginfrm.value;
      console.log('Form values:', formValues);
      this.EmpApiService.login(formValues).subscribe((Res:any)=>{ 
        console.log(Res);
        if (Res.status === true) {
          this.router.navigate(['/dashboard']);
          localStorage.setItem('token',Res.token)
          this.userService.setUserId(this.loginfrm.value.userid);
        } else {
          this.router.navigate(['/']);
        }
      })
    } else {
      // Form is invalid, handle validation errors if needed
    }
  }
}
