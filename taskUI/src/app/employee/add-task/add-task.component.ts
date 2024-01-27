import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  addtaskfrm!: FormGroup;

  constructor( public dialogRef: MatDialogRef<DashboardComponent>, 
                // @Inject(MAT_DIALOG_DATA) public data : DialogData, 
                private fb:FormBuilder) { }


  ngOnInit()
  {
    this.addtaskfrm = this.fb.group({
      yourtask : ['',[Validators.required]],
      status : ['',[Validators.required]]
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }



  addtask()
  {
    if(this.addtaskfrm.valid)
    {
      console.log(this.addtaskfrm);
    }
    else
    {
      console.log('all fild are req.');
      
    }
    
  }
}
