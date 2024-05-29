import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  uploadedImage: string | ArrayBuffer | null = null;
  processedImage: string | ArrayBuffer | null = null;
  barcodes: { type: string, data: string }[] = [];

  constructor(private http: HttpClient) { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImage = reader.result;
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('file', file);

      this.http.post<{ image: string, barcodes: { type: string, data: string }[] }>('http://localhost:5000/upload', formData)
        .subscribe(response => {
          this.processedImage = 'data:image/jpeg;base64,' + response.image;
          this.barcodes = response.barcodes;
        });
    }
  }
}
