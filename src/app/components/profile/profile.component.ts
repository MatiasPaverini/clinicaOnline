import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from "../extra/header/header.component";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

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
