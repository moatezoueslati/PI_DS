import { Component, OnInit } from '@angular/core';
import { bottle } from '../models/bottle';
import { ToastrService } from 'ngx-toastr';
import { DjangoservicesService } from '../djangoservices.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { recompense } from '../models/recompense';
@Component({
  selector: 'app-addrecompense',
  templateUrl: './addrecompense.component.html',
  styleUrls: ['./addrecompense.component.css']
})
export class AddrecompenseComponent implements OnInit {

  recompense:recompense
  constructor(private toastr: ToastrService, private es:DjangoservicesService,private router:Router ) { }

  ngOnInit(): void {
  }

  onFormSubmit(depForm:NgForm){
    this.recompense=new recompense(depForm.controls['type'].value,depForm.controls['points'].value,depForm.controls['description'].value)
console.log(this.recompense)
    this.es.AddRecompense(this.recompense).subscribe(
      (res)=>{
        console.log(res) 
        
        this.toastr.success('Recompense ADDED');

        this.router.navigate(['/accueil/recompenses'])
        .then(() => {
          window.location.reload();
          });
      },
      (error)=>{
        console.log(error)

      }      
    )
   

  }
  annuler()
{  
  window.location.reload();}

}
