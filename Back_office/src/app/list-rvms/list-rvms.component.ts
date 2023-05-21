import { Component, OnInit } from '@angular/core';
import { DjangoservicesService } from '../djangoservices.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddRVMComponent } from '../add-rvm/add-rvm.component';
import { DeleteRVMComponent } from '../delete-rvm/delete-rvm.component';
import { UpdateRVMComponent } from '../update-rvm/update-rvm.component';

@Component({
  selector: 'app-list-rvms',
  templateUrl: './list-rvms.component.html',
  styleUrls: ['./list-rvms.component.css']
})
export class ListRVMSComponent implements OnInit {

  constructor(private es:DjangoservicesService,private router:Router ,public dialog: MatDialog,private snack:MatSnackBar) { }
rvm:any
  ngOnInit(): void {
    this.getRVM()
  }
  getRVM(){
    this.es.GetAllRVM().subscribe 
    ((data)=>{
      console.log(data)

    this.rvm=data;
    },
    (error)=>{
    console.log(error);
    })
  }

  openDialog(){
    this.dialog.open(AddRVMComponent,{
  
      width:'40%'});
  }
  deleteRVM(id:number)
  {
     const dialogRef=this.dialog.open(DeleteRVMComponent,{

     width:'390 px',panelClass:'confirm-dialog-container',
     disableClose:true, data:{
       message: 'Etes-vous sur de supprimer cette RVM?',
       buttonText: {
         ok: 'Oui',
         cancel: 'Non'
   }
 }


     });
   

     dialogRef.afterClosed().subscribe((confirmed: boolean) => {
       if (confirmed) {
       
         this.es.DeleteRVM(id).subscribe(
           (data)=>{
           
             console.log(data);
            
      
           },
           (error)=>{
            console.log(error)
          }
         );
  
      
      this.router.navigate(['/accueil/rvm'])
  .then(() => {
   window.location.reload();
   });
    }
    });
}
  updateRVM(id:number)
  {let dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.data=id;
    dialogconfig.width="40%";
    
    const dialogRef=this.dialog.open(UpdateRVMComponent,dialogconfig);

  }
}
