import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {  
  constructor(private router: Router, public authService: AuthService) {
  }

  onGoHome() {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['/map'])
    }
    else {
      this.router.navigate([''])
    }
    
  }

  onGoToLogin() {
    this.router.navigate(['/login'])
  }

  onGoToRegister() {
    this.router.navigate(['/register'])
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onGoToUpload() {
    this.router.navigate(['/upload']);
  }

}
