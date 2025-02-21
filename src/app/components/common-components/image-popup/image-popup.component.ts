import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css']
})
export class ImagePopupComponent {
  @Input() showImagePopup: boolean = false;
  @Input() imageList: string[] = [];
  @Input() currentImageIndex: number = 0;
  @Output() closePopup: EventEmitter<void> = new EventEmitter();

  // Navigate to previous image
  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.imageList.length) % this.imageList.length;
  }

  // Navigate to next image
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageList.length;
  }

  // Close image popup
  close() {
    this.closePopup.emit();
  }
}
