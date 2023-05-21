import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatSliderModule } from '@angular/material/slider'

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import {MatListModule} from '@angular/material/list';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatSidenavModule,
} from '@angular/material/sidenav';

import {MatDividerModule} from '@angular/material/divider';
import { FirstComponent } from './first/first.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatInputModule} from '@angular/material/input';

import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';

import {MatTabsModule} from '@angular/material/tabs';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



import { LocalisationcomponentComponent } from './localisationcomponent/localisationcomponent.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ToastrModule } from 'ngx-toastr';
import { ContactsComponent } from './contacts/contacts.component';


import { JwtHelperService, JwtModuleOptions, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { ListRVMSComponent } from './list-rvms/list-rvms.component';
import { DashComponent } from './dash/dash.component';
import { AddRVMComponent } from './add-rvm/add-rvm.component';
import { DeleteRVMComponent } from './delete-rvm/delete-rvm.component';
import { UpdateRVMComponent } from './update-rvm/update-rvm.component';
import { ListbottlesComponent } from './listbottles/listbottles.component';
import { AddbottleComponent } from './addbottle/addbottle.component';
import { DeletebottleComponent } from './deletebottle/deletebottle.component';
import { UpdatebotlleComponent } from './updatebotlle/updatebotlle.component';
import { ListRecompensesComponent } from './list-recompenses/list-recompenses.component';
import { Satistics1Component } from './satistics1/satistics1.component';
import { ChartsModule } from 'ng2-charts';
import { CameraComponent } from './camera/camera.component';
import { DeleterecompenseComponent } from './deleterecompense/deleterecompense.component';
import { UpdaterecompenseComponent } from './updaterecompense/updaterecompense.component';
import { AddrecompenseComponent } from './addrecompense/addrecompense.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccueilComponent,
    MenuComponent,
    FirstComponent,
    DashboardComponent,
   
 
    LocalisationcomponentComponent,
    
    ContactsComponent,

    ListRVMSComponent,
    DashComponent,
    AddRVMComponent,
    DeleteRVMComponent,
    UpdateRVMComponent,
    ListbottlesComponent,
    AddbottleComponent,
    DeletebottleComponent,
    UpdatebotlleComponent,
    ListRecompensesComponent,
    Satistics1Component,
    CameraComponent,
    DeleterecompenseComponent,
    UpdaterecompenseComponent,
    AddrecompenseComponent,
  ],
  entryComponents: [],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, BrowserAnimationsModule, MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,    LeafletModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,ReactiveFormsModule ,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,   ToastrModule.forRoot(),
    MatTooltipModule, 
    MatTreeModule,Ng2SearchPipeModule,NgxPaginationModule],
  providers: [ { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },LoginComponent,JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
