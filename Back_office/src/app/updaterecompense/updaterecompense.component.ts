import { Component, OnInit ,Inject } from '@angular/core';
import { recompense } from '../models/recompense';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { bottle } from '../models/bottle';
import { DjangoservicesService } from '../djangoservices.service';
@Component({
  selector: 'app-updaterecompense',
  templateUrl: './updaterecompense.component.html',
  styleUrls: ['./updaterecompense.component.css']
})
export class UpdaterecompenseComponent implements OnInit {

  c:recompense;
  p:recompense;
  id:number;
    constructor(public dialogRef: MatDialogRef<UpdaterecompenseComponent>,@Inject(MAT_DIALOG_DATA) private data1
    ,private s:DjangoservicesService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService) { }
  
    ngOnInit(): void {
      this.id=this.data1
      console.log(this.id);
      this.s.GetrecompenseyId(this.id).subscribe(
        (res)=>{
          console.log(res)  
          this.c=res.recompense;  
       //   this.c.listBottles=res.RVM.bouteilles
 
        },
        (error)=>{
          console.log(error)
        }      
      );
  
    }
    onSubmit(){
      //this.id = this.route.snapshot.params['id'];
      this.s.Updaterecompense(this.id,this.c)
      .subscribe(data => console.log(data), error => console.log(error));
      this.toastr.success('Recompenses bien modifiée');
     this.router.navigate(['accueil/recompenses'])
    .then(() => {
        window.location.reload();
      });
    }
    annuler(){    this.router.navigate(['accueil/recompenses'])}
  

}
