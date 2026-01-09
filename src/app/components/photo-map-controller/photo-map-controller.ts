import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PhotoService } from '../../services/photo-service';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { Photo } from '../../models/photo.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-map-controller',
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './photo-map-controller.html',
  styleUrl: './photo-map-controller.scss',
})
export class PhotoMapController {
  @ViewChild(GoogleMap) map!: GoogleMap
  center = { lat: 0, lng: 0 }
  zoom = 4
  photos: Photo[] = [];
  token = localStorage.getItem('token') || '';
  
  constructor(
    private photoService: PhotoService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.loadPhotos();
  }
  
  loadPhotos() {
    this.photoService.getPhotos(this.token).subscribe((res: Photo[]) => {
      this.photos = res;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.fitMapToMarkers()
      });
    });
  }
  
  openPhoto(photo: Photo) {
    console.log(photo);
    this.router.navigate(['/photos', photo.id])
  }
  
  private fitMapToMarkers() {
    if (!this.map || this.photos.length === 0) return;
    if (this.photos.length === 1) {
      this.center = {
        lat: +this.photos[0].latitude,
        lng: +this.photos[0].longitude
      }
      this.zoom = 12;
      return;
    }
    const bounds = new google.maps.LatLngBounds();
    this.photos.forEach(photo => {
      bounds.extend({
        lat: +photo.latitude,
        lng: +photo.longitude
      });
    });
    this.map.fitBounds(bounds);
  }
}
