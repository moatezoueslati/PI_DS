import { Component, OnInit } from '@angular/core';
import { DjangoservicesService } from '../djangoservices.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialogConfig } from '@angular/material/dialog';
import { AddRVMComponent } from '../add-rvm/add-rvm.component';
import { DeleteRVMComponent } from '../delete-rvm/delete-rvm.component';
import { UpdateRVMComponent } from '../update-rvm/update-rvm.component';
import { AddrecompenseComponent } from '../addrecompense/addrecompense.component';
import { DeleterecompenseComponent } from '../deleterecompense/deleterecompense.component';
import { UpdaterecompenseComponent } from '../updaterecompense/updaterecompense.component';
@Component({
  selector: 'app-list-recompenses',
  templateUrl: './list-recompenses.component.html',
  styleUrls: ['./list-recompenses.component.css']
})
export class ListRecompensesComponent implements OnInit {

  constructor(private es:DjangoservicesService,private router:Router ,public dialog: MatDialog,private snack:MatSnackBar) { }
recompenses:any
  ngOnInit(): void {
    this.getRecompenses()
  }
  getRecompenses(){
    this.es.GetAllRecompenses().subscribe 
    ((data)=>{
      console.log(data)

    this.recompenses=data.recompense;
    },
    (error)=>{
    console.log(error);
    })
  }
  getImageUrl(type: string): string {
    if (type.includes( 'Recharge') )
      return 'https://static.thenounproject.com/png/4349592-200.png';
      if (type.includes( 'Sport') )
      return 'https://cdn-icons-png.flaticon.com/512/534/534113.png';
      if (type.includes( 'restaurant') )

    // Retourner une URL par défaut si le type ne correspond à aucune condition
    return 'https://cdn.pixabay.com/photo/2021/05/25/02/03/restaurant-6281067_1280.png';
    if (type.includes('transport'))
    return 'https://cdn-icons-png.flaticon.com/512/190/190190.png'
    if (type.includes('cinema'))
    return 'https://cdn-icons-png.flaticon.com/512/3936/3936956.png'
    if (type.includes('Bon'))
    return 'https://cdn-icons-png.flaticon.com/512/897/897319.png'
    
  }




  openDialog(){
    this.dialog.open(AddrecompenseComponent,{
  
      width:'40%'});
  }
  deleteR(id:number)
  {
     const dialogRef=this.dialog.open(DeleterecompenseComponent,{

     width:'390 px',panelClass:'confirm-dialog-container',
     disableClose:true, data:{
       message: 'Etes-vous sur de supprimer cette récompense?',
       buttonText: {
         ok: 'Oui',
         cancel: 'Non'
   }
 }


     });
   

     dialogRef.afterClosed().subscribe((confirmed: boolean) => {
       if (confirmed) {
       
         this.es.Deleterecompense(id).subscribe(
           (data)=>{
           
             console.log(data);
            
      
           },
           (error)=>{
            console.log(error)
          }
         );
  
      
      this.router.navigate(['/accueil/recompenses'])
  .then(() => {
   window.location.reload();
   });
    }
    });
}
  updateR(id:number)
  {let dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.data=id;
    dialogconfig.width="40%";
    
    const dialogRef=this.dialog.open(UpdaterecompenseComponent,dialogconfig);

  }





  
}
