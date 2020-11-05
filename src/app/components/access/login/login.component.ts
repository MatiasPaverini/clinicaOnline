import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';

import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from "../../../services/auth/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router: Router, private userService: UserService) { }


  public email: string;
  public password: string;

  login() {
    this.service.login(this.email, this.password).then(res => {

      this.router.navigate(['/home']);
      this.service.getcurrentFirebaseSession().then(res => {
        console.log(res.email);
        this.userService.getAll().subscribe(resp => {
          resp.forEach(user => {
            let data: any = user.payload.doc.data();
            console.log(data.email);
            if (res.email == data.email) {
              sessionStorage.setItem("user", JSON.stringify(data));
            }
          })
        });
      });
    });
  }

  logAdmin() {
    this.password = 'admin123';
    this.email = 'admin@clinicamedica.com.ar';
  }

  ngOnInit(): void {
  }

}
