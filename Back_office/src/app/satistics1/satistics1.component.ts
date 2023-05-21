import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Component, OnInit } from '@angular/core';
import { DjangoservicesService } from '../djangoservices.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-satistics1',
  templateUrl: './satistics1.component.html',
  styleUrls: ['./satistics1.component.css']

})
export class Satistics1Component implements OnInit {

  public lineChartOptions = {
    responsive: true,
  };
public barChartColors1: Color[] = [
{ backgroundColor: 'green' },
{ backgroundColor: 'green' },
]
public barChartColors: Color[] = [
{ backgroundColor: [
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(220, 20, 60, 1)',
  'rgba(0, 128, 0, 1)',
  'rgba(255, 0, 0, 1)',
  'rgba(0, 0, 255, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 0, 255, 1)',
  'rgba(128, 128, 0, 1)',
  'rgba(0, 255, 255, 1)',
  'rgba(255, 0, 128, 1)',
  'rgba(128, 0, 128, 1)',
  'rgba(0, 255, 0, 1)',
  'rgba(128, 128, 128, 1)',
  'rgba(255, 255, 0, 1)',
  'rgba(0, 0, 0, 1)',
  'rgba(192, 192, 192, 1)',
  // Add more colors here
]
 },
{ backgroundColor: 'green' },
]
public lineChartLegend = true;
public lineChartType = 'doughnut';
public lineChartPlugins = [];
public lineChartType2 = 'bar';

public barChartLegend = true;
public lineChartType1 = 'pie';
public lineChartType3 = 'doughnut';
public lineChartType4 = 'radar';
  constructor(private es:DjangoservicesService,private router:Router,public dialog: MatDialog,private snack:MatSnackBar) { }
  rvm:any
bottles:  any


    ngOnInit(): void {
      this.getBRAND()

      this.getRVM()
      this.getRVM1()

this.getRecompenses()
    }
    getBRAND(){
      this.es.GetAllBottles().subscribe 
      ((data)=>{
  
      this.bottles=data.Bouteilles;
console.log(data.Bouteilles)
   
for(var x of this.bottles)
{
  this.labels1.push(x.name)
}
const distinctArray =  this.labels1.filter((n, i) =>  this.labels1.indexOf(n) === i);
this.labels1=distinctArray 

var n:any

console.log(distinctArray)
for(var x1 of distinctArray){
  n=0;
  console.log(x1)

      for(var x of this.bottles)  {
    
    if(x.name.includes(x1))
    {++n}
    
        
    
    
      }
      this.data1.push(n)

       }
       console.log(this.data1)
    
       this.lineChartData1=[{data:this.data1, label: 'Nb de bouteilles par Brand',
       backgroundColor: [
  
        'rgba(0, 0, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 0, 255, 1)',
        'rgba(128, 128, 0, 1)',
        'rgba(0, 255, 255, 1)',
        'rgba(255, 0, 128, 1)',
        'rgba(128, 0, 128, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(128, 128, 128, 1)',
        'rgba(255, 255, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(192, 192, 192, 1)',
        // Add more colors here
      ]
      
    
      }];
   

      },
      (error)=>{
      console.log(error);
      })
    }



users:any
recompenses:any
    getRecompenses(){


   





      this.es.GetAllRecompenses().subscribe 
      ((data)=>{
  
      this.recompenses=data.recompense;
   
for(var x of this.recompenses)
{
  this.labels2.push(x.type)
}
const distinctArray =  this.labels2.filter((n, i) =>  this.labels2.indexOf(n) === i);
this.labels2=distinctArray 

var n:any

console.log(distinctArray)


    
      this.data2=[2,4,5,1,0,0,0]
       
       console.log(this.data2)
    
       this.lineChartData2=[{data:this.data2, label: 'Nb Recompenses of Each type',
       backgroundColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(220, 20, 60, 1)',
        'rgba(0, 128, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 0, 255, 1)',
        'rgba(128, 128, 0, 1)',
        'rgba(0, 255, 255, 1)',
        'rgba(255, 0, 128, 1)',
        'rgba(128, 0, 128, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(128, 128, 128, 1)',
        'rgba(255, 255, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(192, 192, 192, 1)',
        // Add more colors here
      ]
      
    
      }];
   

      },
      (error)=>{
      console.log(error);
      })
    }





    public data:Array<any>= new Array();
    public labels:Array<any>= new Array();
    public lineChartData: Array<ChartDataSets>= new Array() ;

    public data2:Array<any>= new Array();
    public labels2:Array<any>= new Array();
    public lineChartData2: Array<ChartDataSets>= new Array() ;

    public data1:Array<any>= new Array();
    public labels1:Array<any>= new Array();
    public lineChartData1: Array<ChartDataSets>= new Array() ;

    getRVM(){
      this.es.GetAllRVM().subscribe 
      ((data)=>{
  
      this.rvm=data;
      console.log(this.rvm)

      for(var x of data.rvm)  {
        this.labels.push(x.localisation)       
    
        this.data.push( x.bouteilles.length)
    
    
        
    
    
    
       }
    
    
    
       this.lineChartData=[{data:this.data, label: 'Nb',backgroundColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(220, 20, 60, 1)',
        'rgba(0, 128, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 0, 255, 1)',
        'rgba(128, 128, 0, 1)',
        'rgba(0, 255, 255, 1)',
        'rgba(255, 0, 128, 1)',
        'rgba(128, 0, 128, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(128, 128, 128, 1)',
        'rgba(255, 255, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(192, 192, 192, 1)',
        // Add more colors here
      ]
      
      
    
      }];


      },
      (error)=>{
      console.log(error);
      })
    }
  

    public data3:Array<any>= new Array();
    public labels3:Array<any>= new Array();
    public lineChartData3: Array<ChartDataSets>= new Array() ;

    getRVM1(){
      this.es.GetAllRVM().subscribe 
      ((data)=>{
  
      this.rvm=data;
      console.log(this.rvm)

      for(var x of data.rvm)  {
        this.labels3.push(x.localisation)       
    
        this.data3.push( x.quantiteMax)
    
    
        
    
    
    
       }
    
    
    
       this.lineChartData3=[{data:this.data3, label: 'Nb',backgroundColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(220, 20, 60, 1)',
        'rgba(0, 128, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 0, 255, 1)',
        'rgba(128, 128, 0, 1)',
        'rgba(0, 255, 255, 1)',
        'rgba(255, 0, 128, 1)',
        'rgba(128, 0, 128, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(128, 128, 128, 1)',
        'rgba(255, 255, 0, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(192, 192, 192, 1)',
        // Add more colors here
      ]
      
      
    
      }];


      },
      (error)=>{
      console.log(error);
      })
    }
  


  
  }