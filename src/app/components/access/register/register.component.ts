import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../../../services/auth/auth.service";
import { UserService } from "../../../services/user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private loginService: AuthService, private router: Router) { }

  public types = [
    {id: 0, name: "User"},
    {id: 1, name: "Admin"},
    {id: 2, name: "Doctor"}
  ]
  public email: string = "";
  public name: string = "";
  public surname: string = "";
  public type: string = "";
  public password: string = "";
  public remember: boolean = false;

  ngOnInit() {
  }

  public register() {
    let user = { user: this.name, type: this.type, surname: this.surname, email: this.email };
    this.loginService.register(this.email, this.password).then(res => 
      this.createUser(user)
    ).catch(err => console.log(err));
    this.router.navigate(['/login']);
  }

  createUser(user) {
    this.userService.create(user)
      .then(res =>
        this.checkIfRegistered(user)
      ).catch(err => 
        console.log("Error en el registro: " + err)
      );
  }

  public checkIfRegistered(user) {
    console.log(this.remember);
    if (this.remember) {
      console.log("Guardando datos en local");
      this.loginService.login(this.email, this.password).then(res =>
        this.router.navigate(['/Principal'])).catch(err =>
          console.log(err));
      // this.user.forEach(u => {
      //   console.log(u.payload.doc.data());
      // });;
      this.loginService.activeSession = true;
      this.loginService.saveCurrentUser(user);
    }
  }


}
