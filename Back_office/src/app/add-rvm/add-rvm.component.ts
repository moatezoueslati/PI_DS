import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DjangoservicesService } from '../djangoservices.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { rvm } from '../models/rvm';

@Component({
  selector: 'app-add-rvm',
  templateUrl: './add-rvm.component.html',
  styleUrls: ['./add-rvm.component.css']
})
export class AddRVMComponent implements OnInit {

  rvm:rvm
  constructor(private toastr: ToastrService, private es:DjangoservicesService,private router:Router ) { }

  ngOnInit(): void {
  }

  onFormSubmit(depForm:NgForm){
    this.rvm=new rvm(depForm.controls['localisation'].value,0,depForm.controls['max'].value,[])
console.log(this.rvm)
    this.es.AddRVM(this.rvm).subscribe(
      (res)=>{
        console.log(res)        
      },
      (error)=>{
        console.log(error)
      }      
    )
    this.toastr.success('RVM ADDED');

   this.router.navigate(['/accueil/rvm'])
   .then(() => {
     window.location.reload();
    });

  }
  annuler()
{  
  window.close();

}


}
