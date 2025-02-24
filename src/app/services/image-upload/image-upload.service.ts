import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private apiUrl = 'http://localhost:4002/upload'; // API endpoint for uploading images

  constructor(private http: HttpClient) {}

  // Upload images to the server
  uploadImages(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
