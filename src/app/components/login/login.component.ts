import { Component, OnInit } from '@angular/core';

import { User } from "../../classes/user/user";
import { AuthService } from "../../services/auth/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private user: User) { }


  private email: string;
  private password: string;

  login() {
    this.user = new User(this.email);
    this.service.login(this.email, this.password);
  }

  ngOnInit(): void {
  }

}
