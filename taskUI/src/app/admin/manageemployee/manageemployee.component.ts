import { Component } from '@angular/core';
import { ManageComponent } from '../manage/manage.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { APIADMINService } from '../apiadmin.service';

@Component({
  selector: 'app-manageemployee',
  templateUrl: './manageemployee.component.html',
  styleUrls: ['./manageemployee.component.scss']
})
export class ManageemployeeComponent {



  addemployeefrm!: FormGroup;

  constructor( public dialogRef: MatDialogRef<ManageComponent>, 
                // @Inject(MAT_DIALOG_DATA) public data : DialogData, 
                private fb:FormBuilder,private apiservice : APIADMINService) { }


  ngOnInit()
  {
    this.addemployeefrm = this.fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]],
      role : ['',[Validators.required]],
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }



  addemployee()
  {
    if(this.addemployeefrm.valid)
    {
      const data = this.addemployeefrm.value;
      console.log(this.addemployeefrm);
      this.apiservice.manageempgetAdd(data).subscribe((res:any)=> {
        console.log(res);
        
      })
    }
    else
    {
      console.log('all fild are req.');
    }
    
  }

}