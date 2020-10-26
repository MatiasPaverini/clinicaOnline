import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

import { User } from "../../classes/user/user";
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public activeSession: boolean = false;

  constructor(private service: AngularFireAuth) { }


  /**
     * login
     */
  public login(email: string, password: string) {
    return this.service.signInWithEmailAndPassword(email, password);
  }

  /**
   * register
   */
  public register(email: string, password: string) {
    return this.service.createUserWithEmailAndPassword(email, password);
  }


  public logout() {
    return this.service.signOut();
  }

  saveCurrentUser(user) {
    sessionStorage.setItem('user', user);

  }

  getCurrent(): string {
    return sessionStorage.getItem('user');
  }

}
