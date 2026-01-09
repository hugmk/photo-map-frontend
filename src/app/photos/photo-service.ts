import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  getPhotos(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/photos`, { headers });
  }

  uploadPhoto(file: File, token: string) {
    const formData = new FormData();
    formData.append('image', file);

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/photos`, formData, { headers });
  }
}
