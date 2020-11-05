import { Component, OnInit } from '@angular/core';

import { Doctor } from 'src/app/classes/doctor/doctor';
import { Patient } from 'src/app/classes/patient/patient';
import { Turn } from 'src/app/classes/turns/turn';
import { User } from 'src/app/classes/user/user';

import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from "../../../../services/auth/auth.service";
import { TurnsService } from "../../../../services/turns/turns.service";

import { HeaderComponent } from "../../header/header.component";


@Component({
  selector: 'app-turns-list',
  templateUrl: './turns-list.component.html',
  styleUrls: ['./turns-list.component.scss']
})
export class TurnsListComponent implements OnInit {

  public turnList: Turn[] = [];
  public user: any;
  public localUser;

  constructor(private auth: AuthService, private turnService: TurnsService, private userService: UserService) {
    this.localUser = JSON.parse(auth.getCurrent());

    console.log(this.localUser);

    if (this.localUser.type == 'doctor') {
      this.user = new Doctor(this.localUser.email, this.localUser.name, this.localUser.surname, this.localUser.id, this.localUser.speciality, this.localUser.workingHours, this.localUser.workingDays);
    }
    else if (this.localUser.type == 'patient') {
      this.user = new Patient(this.localUser.email, this.localUser.name, this.localUser.surname, this.localUser.id);
    }

    console.log(this.user);


    turnService.getAll().subscribe(res => {
      let turns: any[] = res;
      turns.forEach(turn => {
        console.log(turn.payload.doc.data());
      });

      if (Array.isArray(turns)) {

        turns.filter(turn => {
          let savedTurn = turn.payload.doc.data();

          console.log(savedTurn.doctor.email == (this.user as Doctor).Email);
          if(savedTurn.doctor.email == (this.user as Doctor).Email || savedTurn.patient.Email == (this.user as Patient).Email) {
            this.turnList.push(new Turn(savedTurn.pacient, savedTurn.doctor, savedTurn.time, savedTurn.date, turn.payload.doc, savedTurn.status));
          }
        });

        console.log(this.turnList);

      }
    });
  }

  /**
   * acceptTurn
   */
  public acceptTurn(event) {
    console.log("evento click: " + event.path[0]);
    console.log("Turno aceptado");
  }

  /**
   * cancelTurn
   */
  public cancelTurn(event) {

  }

  /**
   * denyTurn
   */
  public denyTurn(event) {

  }


  ngOnInit(): void {
  }

}
