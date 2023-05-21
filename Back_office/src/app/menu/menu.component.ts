import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  goCommunes()
  {
    this.router.navigate(['/accueil/communes']);

  }

  goRVM()
  {
    this.router.navigate(['/accueil/rvm']);

  }


  goDASH()
  {
    this.router.navigate(['/accueil/dashboardADMIN']);

  }
  gocommune()
  {
this.router.navigate(['/accueil/ajoutercommune']);

  }
  goIntervenant()
  {
    this.router.navigate(['/accueil/intervenants']);

  }
  goSTAT()
  {
    this.router.navigate(['/accueil/statistics']);

  }

  goLocation()
  {
    this.router.navigate(['/accueil/localiser']);

  }
  goRecompenses()
  {
    this.router.navigate(['/accueil/recompenses']);

  }
  goBottles()
  {
    this.router.navigate(['/accueil/bottles']);

  }
  goContacts()
  {
    this.router.navigate(['/accueil/contacts']);

  }
  gocatalogues()
  {
    this.router.navigate(['/accueil/ajoutercatalogue']);

  }
  suivi()
  {
    this.router.navigate(['/accueil/suivi']);

  }
 
  
}
