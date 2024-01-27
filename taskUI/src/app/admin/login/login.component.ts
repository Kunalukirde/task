import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginfrm! : FormGroup;
  constructor(private fb: FormBuilder, private router:Router, private service : AuthService) {
    this.loginfrm = this.fb.group({
      userid: ['', [Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginfrm.valid) {
      const formValues = this.loginfrm.value;
      this.service.login(formValues).subscribe((res:any)=> {
        if (res.status === true) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/']);
        }
      })
    } else {
      // Form is invalid, handle validation errors if needed
    }
  }
}
