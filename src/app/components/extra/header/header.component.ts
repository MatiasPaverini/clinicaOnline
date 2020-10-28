import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  public toLogin() {
    this.router.navigate(['/login']);
  }

  /**
   * toRegister
   */
  public toRegister() {
    this.router.navigate(['/register']);  
  }

  public logout() {
    this.authService.logout();
  }

  public toProfile() {
    this.router.navigate(['profile']);
  }
}
