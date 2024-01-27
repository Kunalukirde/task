import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { APIADMINService } from '../apiadmin.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent {
  addemployeefrm!: FormGroup;

  constructor( public dialogRef: MatDialogRef<AddemployeeComponent>, 
                // @Inject(MAT_DIALOG_DATA) public data : DialogData, 
                private fb:FormBuilder, private apiservice:APIADMINService) { }


  ngOnInit()
  {
    this.addemployeefrm = this.fb.group({
      employeename : ['',[Validators.required]],
      employeeid : ['',[Validators.required]]
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }



  addemployee()
  {
    const addEmpData = this.addemployeefrm.value;
    if(this.addemployeefrm.valid)
    {
      console.log(this.addemployeefrm);
      this.apiservice.addEmp(addEmpData).subscribe((res)=>{
        console.log(res);
        this.onNoClick();
      })
    }
    else
    {
      console.log('all fild are req.');
      
    }
    
  }

}
