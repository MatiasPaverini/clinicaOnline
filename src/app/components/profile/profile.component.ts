import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';

import { HeaderComponent } from "../extra/header/header.component";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { 
    let json = JSON.parse(sessionStorage.getItem('user'));
    this.user = new User(json.email, json.name, json.surname);
  }

  user;
  ngOnInit(): void {
  }

  newTurn(){
    this.router.navigate(['turns']);
  }

  listTurns() {
    this.router.navigate(['turnsList'])
  }

}
