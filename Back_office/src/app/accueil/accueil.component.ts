import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  public opened = true;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  changeMenu():void{
    this.opened = !this.opened
  }
 

}
