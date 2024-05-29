import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploadedImage: string | null = null;
  processedImage: string | null = null;
  barcodes: { type: string; data: string }[] = [];
  fileUploaded: boolean = false; // State to track if file is uploaded

  handleFileProcessed(data: any): void {
    this.processedImage = data.image;
    this.barcodes = data.barcodes;
    this.fileUploaded = true; // Set state to true to show the upload-handler component
  }
}
