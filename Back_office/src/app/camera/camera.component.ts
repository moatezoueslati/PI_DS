import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera',
  template: `
    <button (click)="openCamera()">Open Camera</button>
    <video #videoElement></video>
    <canvas #canvasElement style="display: none;"></canvas>
  `
})
export class CameraComponent {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;

  openCamera(): void {

    
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = this.videoElement.nativeElement;
        video.srcObject = stream;
        video.play();

        setTimeout(() => this.takePhoto(), 5000); // Capture photo after 5 seconds
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }

  takePhoto(): void {
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
    link.download = 'captured_image.png';
    link.click();
  }
}
