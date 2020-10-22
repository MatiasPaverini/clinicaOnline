import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../services/auth/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService) { }


  private email: string;
  private password: string;

  login() {
    this.service.login(this.email, this.password);
  }

  logAdmin(){
    this.password = 'admin123';
    this.email = 'admin@clinicamedica.com.ar';
  }

  ngOnInit(): void {
  }

}
