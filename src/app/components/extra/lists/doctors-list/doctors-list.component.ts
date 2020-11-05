import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Doctor } from 'src/app/classes/doctor/doctor';

import { UserService } from "../../../../services/user/user.service";

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  @Input() speciality: string;
  @Output() doctor = new EventEmitter<Doctor>();

  doctorsAux;
  doctors: Doctor[] = [];

  constructor(private userService: UserService) {

    this.userService.getAll().subscribe(resp => {
      this.doctorsAux = resp;
      console.log(this.doctorsAux[0].payload.doc.data());

      this.doctorsAux.forEach(doctor => {
        console.log(doctor.payload.doc.data());
        let newDoc: Doctor = this.toObj(doctor.payload.doc.data());

        if (this.speciality == newDoc.speciality) {
          this.doctors.push(newDoc);
        }
        else {
          console.log("No se encuentra en esta especialidad");
        }
      })

      console.log(this.doctors[0]);
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.doctors = [];
    if (this.doctorsAux != undefined) {
      this.doctorsAux.forEach(doctor => {
        console.log(doctor.payload.doc.data());
        let newDoc: Doctor = this.toObj(doctor.payload.doc.data());

        if (changes.speciality.currentValue == newDoc.speciality) {
          this.doctors.push(newDoc);
        }
        else {
          console.log("No se encuentra en esta especialidad");
        }
      });
    }
  }

  selectDoctor(event) {
    let rowData = event.path[1].children;
    console.log(rowData[0].innerText);
    // for(let index = 0; index < event.path[1].children.length; index++) {
    //   console.log(event.path[1].children[index].innerText);
    // }
    // let doctor = new Doctor("dsadasd", "noasfds", "dsklfhdsj", "doc-123", "Otorrinonaringología", ["012PM", "06PM"]);

    console.log(rowData);
    let selectedDoctor: Doctor;
    this.doctors.forEach(doctor => {
      console.log(rowData[2])
      if(doctor.Email == rowData[2].innerText) {
        selectedDoctor = doctor;
      }

    })
    console.log("En la lista: " + selectedDoctor.id);
    this.doctor.emit(selectedDoctor);
  }

  toObj(json) {
    return new Doctor(json.email, json.name, json.surname, json.id, json.speciality, json.workingHours, json.workingDays);
  }

  ngOnInit(): void {

  }

}
