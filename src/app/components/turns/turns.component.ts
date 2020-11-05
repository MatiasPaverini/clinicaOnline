import { Component, Input, OnInit } from '@angular/core';
import { v4 as uuidv4 } from "uuid";

import { Turn } from "../../classes/turns/turn";
import { Patient } from "../../classes/patient/patient";
import { Doctor } from "../../classes/doctor/doctor";
import { Speciality } from "../../classes/speciality/speciality";
import { DoctorDate } from "../../classes/date/date";

import { HeaderComponent } from "../extra/header/header.component";
import { DoctorsListComponent } from "../extra/lists/doctors-list/doctors-list.component";

import { TurnsService } from "../../services/turns/turns.service";


@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.scss']
})
export class TurnsComponent implements OnInit {

  constructor(private turnsService: TurnsService) {

    this.turnsService.getAll().subscribe(res => {
      if (Array.isArray(res[0].payload.doc.data())) {
        this.turns = (res[0].payload.doc.data() as Turn[]);
        console.log(this.turns);
      }
      else {
        this.turns.push((res[0].payload.doc.data() as Turn));
        console.log(this.turns);
      }
    });
    let patient = JSON.parse(sessionStorage.getItem("user"));
    this.patient = new Patient(patient.email, patient.name, patient.surname, patient.id);
  }

  availability: boolean = false;
  available: boolean = false;
  turns: Turn[] = [];
  turn: Turn;
  date: string;

  patient: Patient;
  doctor: Doctor;

  speciality: string;
  specialityList: string[] = new Speciality().specialities;

  message: string;

  getDoctor(doctor) {
    this.doctor = doctor;
  }

  checkAvailability() {
    let timetable: string[] = this.date.split('T');
    console.log(timetable);

    let hour: number = Number.parseInt(timetable[1].split(':')[0]);
    console.log("minutos elegidos: " + Number.parseInt(timetable[1].split(':')[1]));
    let minute: number = this.turnsMinutes(Number.parseInt(timetable[1].split(':')[1]));

    let doctorStartHour: number = Number.parseInt(this.doctor.workingHours[0].split(':')[0]);
    let doctorStartMinute: number = Number.parseInt(this.doctor.workingHours[0].split(':')[1].split('(AM)|(PM)')[0]);
    let doctorStartDayTime: string = this.doctor.workingHours[0].split(':')[1].substring(2);

    let doctorFinishHour: number = Number.parseInt(this.doctor.workingHours[1].split(':')[0]);
    let doctorFinishMinute: number = Number.parseInt(this.doctor.workingHours[1].split(':')[1].split('(AM)|(PM)')[0]);
    let doctorFinishDayTime: string = this.doctor.workingHours[1].split(':')[1].substring(2);

    doctorStartHour = this.hourParser(doctorStartHour, doctorStartDayTime);
    doctorFinishHour = this.hourParser(doctorFinishHour, doctorFinishDayTime);


    //If no turns for this doctor are assigned at this time then it executes this:
    this.doctor.workingDays.forEach(workingDay => {
      console.log("Día seleccionado: " + new DoctorDate().dates[new Date(this.date).getDay()]);
      console.log("Día disponible de médico: " + workingDay);
      if ((new DoctorDate().dates[new Date(this.date).getDay()] == workingDay) && (hour >= doctorStartHour && hour <= doctorFinishHour) && (minute >= doctorStartMinute)) {
        this.turns.forEach(turn => {
          let turnHour = Number.parseInt(turn.time.split(':')[0]);
          let turnMinutes = Number.parseInt(turn.time.split(':')[1]);

          console.log("Minutos del calendario: " + minute);

          if (turnHour == hour && (turnMinutes == minute)) {
            this.availability = true;
            this.available = false;
            console.log("Turno no disponible");
          }
          else {
            this.available = true;
            this.availability = false;
            console.log("Turno Disponible");
            let timeString = hour.toString()+":"+minute.toString();
            this.turn = new Turn(this.patient, this.doctor, timeString, this.date, this.idGenerator());
          }
        });

      }
      else {
        this.availability = true;
        this.available = false;
        console.log("Turno no disponible.")
        console.log("Minutos del turno: " + minute);
        console.log("Minutos del médico: Inicio: " + doctorStartMinute + ", Fin: " + doctorFinishMinute);
      }

    });

  }

  /**
   * saveTurn
   */
  public saveTurn() {
    this.turnsService.save(this.turn.toJSON(), this.turn.id).then(res => {
      this.message = "Turno agendado con éxito";
    })
  }


  ngOnInit(): void {


  }

  private hourParser(time, daytime): number {
    let result: number;
    if (daytime === 'PM') {
      result = time + 12;
    }
    else {
      result = time;
    }
    console.log(result);
    return result;
  }

  private turnsMinutes(realMinutes) {
    console.log(realMinutes);

    if ((realMinutes >= 0 && realMinutes <= 8) || (realMinutes >= 51 && realMinutes <= 59)) {
      return 0;
    }
    else if (realMinutes >= 9 && realMinutes <= 20) {
      return 15;
    }
    else if (realMinutes >= 21 && realMinutes <= 38) {
      return 30;
    }
    else if (realMinutes >= 39 && realMinutes <= 50) {
      return 45;
    }
  }


  toObjPatient(json) {
    return new Patient(json.email, json.name, json.surname, json.id);
  }


  idGenerator() {
    let id = uuidv4();
    console.log(id);
    return this.speciality.substring(0,2) + id;
  }

}
