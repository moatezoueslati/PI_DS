import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-deletebottle',
  templateUrl: './deletebottle.component.html',
  styleUrls: ['./deletebottle.component.css']
})
export class DeletebottleComponent implements OnInit {
  ngOnInit(): void {
  }

  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeletebottleComponent>) {
      if(data){
    this.message = data.message || this.message;
    if (data.buttonText) {
      this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    }
      }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  
}
