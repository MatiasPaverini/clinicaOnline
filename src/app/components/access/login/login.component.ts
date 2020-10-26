import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../../../services/auth/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router:Router) { }


  public email: string;
  public password: string;

  login() {
    this.service.login(this.email, this.password);
    this.router.navigate(['/home']);
  }

  logAdmin(){
    this.password = 'admin123';
    this.email = 'admin@clinicamedica.com.ar';
  }


  

  ngOnInit(): void {
  }

}
