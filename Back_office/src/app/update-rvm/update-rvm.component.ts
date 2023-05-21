import { rvm } from '../models/rvm';
import { DjangoservicesService } from '../djangoservices.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-rvm',
  templateUrl: './update-rvm.component.html',
  styleUrls: ['./update-rvm.component.css']
})
export class UpdateRVMComponent implements OnInit {

  c:rvm;
  p:rvm;
  id:number;
    constructor(public dialogRef: MatDialogRef<UpdateRVMComponent>,@Inject(MAT_DIALOG_DATA) private data1
    ,private s:DjangoservicesService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService) { }
  
    ngOnInit(): void {
      this.id=this.data1
      console.log(this.id);
      this.s.GetRVMById(this.id).subscribe(
        (res)=>{
          console.log(res)  
          this.c=res.RVM;  
          this.c.listBottles=res.RVM.bouteilles
 
        },
        (error)=>{
          console.log(error)
        }      
      );
  
    }
    onSubmit(){
      //this.id = this.route.snapshot.params['id'];
      this.s.UpdateRVM(this.id,this.c)
      .subscribe(data => console.log(data), error => console.log(error));
      this.toastr.success('RVM bien modifiée');
     this.router.navigate(['accueil/rvm'])
    .then(() => {
        window.location.reload();
      });
    }
    annuler(){    this.router.navigate(['accueil/rvm'])}
  

}
