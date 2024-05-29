import { Component, EventEmitter, Output } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-upload-header',
  templateUrl: './upload-header.component.html',
  styleUrls: ['./upload-header.component.css']
})
export class UploadHeaderComponent {
  @Output() fileProcessed = new EventEmitter<any>();

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      this.fileUploadService.uploadFile(file).subscribe(
        response => {
          this.fileProcessed.emit(response);
        },
        error => {
          alert('Failed to upload file.');
        }
      );
    } else {
      alert('Only JPEG and PNG files are allowed.');
    }
  }
}
