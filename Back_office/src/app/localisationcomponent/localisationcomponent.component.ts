import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import  * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DjangoservicesService } from '../djangoservices.service';
import { rvm } from '../models/rvm';
@Component({
  selector: 'app-localisationcomponent',
  templateUrl: './localisationcomponent.component.html',
  styleUrls: ['./localisationcomponent.component.css']
})
export class LocalisationcomponentComponent  implements OnInit  {
  constructor(private http: HttpClient,private es:DjangoservicesService) {}
  rvm:Array<rvm>= new Array();

  addresses: string[] = [];
  getRVM(){
    this.es.GetAllRVM().subscribe 
    ((data)=>{

    this.rvm=data.rvm;
    for(var x in this.rvm)
    {
      console.log(this.rvm[x].localisation)
    this.addresses.push(this.rvm[x].localisation)

    }


    
    const map = L.map('map').setView([0, 0], 2);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(map);
  


this.addresses.forEach(address => {
      this.geocodeAddress(address)
        .subscribe(response => {
          const locations = response['results'][0]['locations'];
          if (locations.length > 0) {
            const latLng = L.latLng(locations[0]['latLng']['lat'], locations[0]['latLng']['lng']);
            this.addMarker(map, address, latLng.lat, latLng.lng);
          }
        })
        ;
        (error => {
          console.log('Erreur de géocodage :', error);
        });
    });



    },
    (error)=>{
    console.log(error);
    })
  }
  



   ngOnInit() {
    this.getRVM();

  }
  
  private geocodeAddress(address: string) {
    const url = `http://www.mapquestapi.com/geocoding/v1/address?key=xBjpq2DjNZNKVMSAMjGYFa0DKAE2CZ0u&location=${encodeURIComponent(address)}`;
  
    return this.http.get(url);
  }

  private addMarker(map: L.Map, title: string, lat: number, lng: number) {
    const customIcon = L.icon({
      iconUrl: 'https://play-lh.googleusercontent.com/5WifOWRs00-sCNxCvFNJ22d4xg_NQkAODjmOKuCQqe57SjmDw8S6VOSLkqo6fs4zqis',
      iconSize: [32, 32], // Taille personnalisée de l'icône du marqueur
      iconAnchor: [16, 32], // Point d'ancrage de l'icône du marqueur
      popupAnchor: [0, -32] // Point d'ancrage du popup par rapport à l'icône du marqueur
    });
  
    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    marker.bindPopup(title);
  }

}  