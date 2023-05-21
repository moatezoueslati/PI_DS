import { DjangoservicesService } from '../djangoservices.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { bottle } from '../models/bottle';
@Component({
  selector: 'app-updatebotlle',
  templateUrl: './updatebotlle.component.html',
  styleUrls: ['./updatebotlle.component.css']
})
export class UpdatebotlleComponent implements OnInit {

  c:bottle;
  p:bottle;
  id:number;
    constructor(public dialogRef: MatDialogRef<UpdatebotlleComponent>,@Inject(MAT_DIALOG_DATA) private data1
    ,private s:DjangoservicesService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService) { }
  
    ngOnInit(): void {
      this.id=this.data1
      console.log(this.id);
      this.s.GetBottlesyId(this.id).subscribe(
        (res)=>{
          console.log(res)  
          this.c=res.Bouteille;  
 
        },
        (error)=>{
          console.log(error)
        }      
      );
  
    }
    onSubmit(){
      //this.id = this.route.snapshot.params['id'];
      this.s.UpdateBottles(this.id,this.c)
      .subscribe(data => console.log(data), error => console.log(error));
      this.toastr.success('Bottle updated');
     this.router.navigate(['accueil/bottles'])
    .then(() => {
        window.location.reload();
      });
    }
    annuler(){    this.router.navigate(['accueil/bottles'])}
}
