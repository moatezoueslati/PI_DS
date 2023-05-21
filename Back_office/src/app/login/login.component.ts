import {  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { loginrequest } from '../models/loginrequest';
import { Utilisateur } from '../models/Utilisateur';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { DjangoservicesService } from '../djangoservices.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private es:DjangoservicesService,private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
  
  }
  pathImage:any
  u:any
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  onSubmit(event: Event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const username = usernameInput.value;


    this.es.GetAdminbyUsername(username).subscribe 
    ((data)=>{

      this.pathImage=data.user.photo
      console.log(this.pathImage)
      this.toastr.success("moatez")

      navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = this.videoElement.nativeElement;
        video.srcObject = stream;
      video.play();

        setTimeout(() => this.takePhoto(username), 2000);
         // Capture photo after 2 seconds
     }
     )
      




     .catch((error) => {
      console.error('Error accessing camera:', error);
     });



     console.log("Avant l'attente");

     setTimeout(() => {
       console.log("Après 5 secondes d'attente");
       console.log(this.pathImage)

       this.es.loginface(this.pathImage,'C:/Users/pc/Downloads/captured'+username+'.jpg').subscribe(
        (res)=>{
  
  console.log(res)


  if(res.result=="No, it is not the same person.")
  {this.toastr.error("It's not"+username) 
  
  
  }
  else {
    this.toastr.success("welcome "+username) 
 
  
    this.router.navigate(['/accueil/rvm'])
  
  }
          
  
        
        },
        (error)=>{
          console.log("erreur")
          console.log(error.status)
            this.toastr.error("It's not  "+username);
               }      
      )
  
  
  

     }, 5000);
     
     console.log("Après l'appel à setTimeout, le reste du code s'exécute immédiatement");



     


   




    },
    (error)=>{
      if (error.status === 404) {
        this.toastr.error("L'utilisateur n'existe pas !");
      } else {
        this.toastr.error("Une erreur s'est produite !");
      }    })




   
   
  }

   delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  takePhoto(username:any): void {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match the video feed
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data from the canvas as a base64-encoded string
    const photoData = canvas.toDataURL('image/png');

    // Create an anchor element to trigger the image download
    const link = document.createElement('a');
    link.href = photoData;
    link.download = 'captured'+username+'.jpg';
    link.click();
  }
 
}
