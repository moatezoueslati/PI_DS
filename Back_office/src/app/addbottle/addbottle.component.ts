import { Component, OnInit } from '@angular/core';
import { bottle } from '../models/bottle';
import { ToastrService } from 'ngx-toastr';
import { DjangoservicesService } from '../djangoservices.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbottle',
  templateUrl: './addbottle.component.html',
  styleUrls: ['./addbottle.component.css']
})
export class AddbottleComponent implements OnInit {

  bottle:bottle
  constructor(private toastr: ToastrService, private es:DjangoservicesService,private router:Router ) { }

  ngOnInit(): void {
  }

  onFormSubmit(depForm:NgForm){
    this.bottle=new bottle(depForm.controls['name'].value,depForm.controls['points'].value,depForm.controls['type'].value)
console.log(this.bottle)
    this.es.AddBottle(this.bottle).subscribe(
      (res)=>{
        console.log(res)        
      },
      (error)=>{
        console.log(error)
      }      
    )
    this.toastr.success('Bottle ADDED');

   this.router.navigate(['/accueil/bottles'])
   .then(() => {
     window.location.reload();
     });

  }
  annuler()
{  
  window.location.reload();}


}
