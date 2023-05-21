import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanActivate } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';



import { AppComponent } from './app.component';



import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FirstComponent } from './first/first.component';


import { LocalisationcomponentComponent } from './localisationcomponent/localisationcomponent.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';


import { ListRVMSComponent } from './list-rvms/list-rvms.component';
import { DashComponent } from './dash/dash.component';
import { ListbottlesComponent } from './listbottles/listbottles.component';
import { ListRecompensesComponent } from './list-recompenses/list-recompenses.component';
import { Satistics1Component } from './satistics1/satistics1.component';
import { CameraComponent } from './camera/camera.component';




const routes: Routes = [
      {path:'camera',component:CameraComponent},
  {path:'login',component:LoginComponent},   {path:'', redirectTo: '/login', pathMatch: 'full'},
 

  {path:'accueil',component:AccueilComponent ,children: [
 {path:'statistics',component:Satistics1Component
},

 
 {path:'localiser',component:LocalisationcomponentComponent
},
 {
      path: 'contacts',
      component: ContactsComponent
     
      
   },
   
   {
    path: 'rvm',
    component: ListRVMSComponent
   
    
 },
 {
  path: 'bottles',
  component: ListbottlesComponent
 
  
},

{
 path: 'recompenses',
 component: ListRecompensesComponent

 
},
 {
  path: 'dashboardADMIN',
  component: DashComponent
 
  
},  {path:'menu',component:MenuComponent
  }
,
  {path:'first',component:FirstComponent},
  {path:'dashboard',component:DashboardComponent},
 

]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
