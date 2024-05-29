import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-handler',
  templateUrl: './upload-handler.component.html',
  styleUrls: ['./upload-handler.component.css']
})
export class UploadHandlerComponent {
  @Input() uploadedImage: string | null = null;
  @Input() processedImage: string | null = null;
  @Input() barcodes: { type: string; data: string }[] = [];
}
