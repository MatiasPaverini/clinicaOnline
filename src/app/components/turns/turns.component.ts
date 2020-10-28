import { Component, Input, OnInit } from '@angular/core';

import { Turn } from "../../classes/turns/turn";
import { Patient } from "../../classes/patient/patient";
import { Doctor } from "../../classes/doctor/doctor";
import { Speciality } from "../../classes/speciality/speciality";

import { HeaderComponent } from "../extra/header/header.component";
import { DoctorsListComponent } from "../extra/lists/doctors-list/doctors-list.component";

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss']
})
export class TurnsComponent implements OnInit {

  constructor() { }

  turns: Turn[] = [];

  date: string;

  patient: Patient;
  doctor: Doctor;

  speciality: string;
  specialityList:string[] = new Speciality().specialities;

  getDoctor(event) {
    console.log(event);
  }

  getSpeciality() {}
  
check() {
  console.log(this.date.split('T')[1]);
}
  
  ngOnInit(): void {
  }

}
