import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-controller',
  imports: [],
  templateUrl: './home-controller.html',
  styleUrl: './home-controller.scss',
})
export class HomeController {

  constructor(private router: Router) {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
