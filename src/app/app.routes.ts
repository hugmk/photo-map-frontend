import { Routes } from '@angular/router';
import { HomeController } from './components/home-controller/home-controller';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { PhotoMapController } from './components/photo-map-controller/photo-map-controller';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { Upload } from './components/upload/upload';
import { PhotoDetail } from './components/photo-detail/photo-detail';

export const routes: Routes = [
  {
    path: '',
    component: HomeController,
    canActivate: [guestGuard]
  },
  {
    path: 'login',
    component: Login,
    canActivate: [guestGuard]
  },
  {
    path: 'register',
    component: Register,
    canActivate: [guestGuard]
  },
  {
    path: 'map',
    component: PhotoMapController,
    canActivate: [authGuard]
  },
  {
    path: 'upload',
    component: Upload,
    canActivate: [authGuard]
  },
  {
    path: 'photos/:id',
    component: PhotoDetail,
    canActivate: [authGuard]
  },
  {
    path: '**', 
    redirectTo: ''
  }
];
