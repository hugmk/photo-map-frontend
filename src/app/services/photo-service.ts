import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPhoto(id: string) {
    return this.http.get<Photo>(`${this.apiUrl}/photos/${id}`)
  }


  getPhotos(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Photo[]>(`${this.apiUrl}/photos`, { headers });
  }

  uploadPhoto(formData: FormData) {
    return this.http.post(
      `${this.apiUrl}/photos`,
      formData
    )
  }
}
