import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { APIADMINService } from '../apiadmin.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent {


  addtaskfrm!: FormGroup;

  constructor( public dialogRef: MatDialogRef<AddtaskComponent>, 
                // @Inject(MAT_DIALOG_DATA) public data : DialogData, 
                private fb:FormBuilder,private apiservice : APIADMINService) { }


  ngOnInit()
  {
    this.addtaskfrm = this.fb.group({
      employeename : ['',[Validators.required]],
      taskname : ['',[Validators.required]]
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }



  assigntask()
  {
    if(this.addtaskfrm.valid)
    {
      const data = this.addtaskfrm.value
      console.log(this.addtaskfrm);
      this.apiservice.addTask(data).subscribe((res:any) => {
        this.onNoClick();
      })
    }
    else
    {
      console.log('all fild are req.');
    }
    
  }

}
