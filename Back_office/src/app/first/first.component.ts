import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Output()  isClosed:EventEmitter<Event> = new EventEmitter<Event>(); 

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  setting(){
    this.router.navigate(['/accueil/setting']);
  }
  closeMenu():void{
     this.isClosed.emit();
   setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
     }, 300);

  }


}
