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
    this.doctorsAux.forEach(doctor => {
      console.log(doctor.payload.doc.data());
      let newDoc: Doctor = this.toObj(doctor.payload.doc.data());

      if (changes.speciality.currentValue == newDoc.speciality) {
        this.doctors.push(newDoc);
      }
      else {
        console.log("No se encuentra en esta especialidad");
      }
    })
  }

  selectDoctor(event) {
    let doctor = new Doctor("dsadasd", "noasfds", "dsklfhdsj", "doc-123", "Otorrinonaringología", ["012PM", "06PM"]);
    console.log("En la lista: " + doctor.Name);
    // this.doctor.emit(doctor);
  }

  toObj(json) {
    return new Doctor(json.email, json.name, json.surname, json.id, json.speciality, json.workingHours);
  }

  ngOnInit(): void {
    let doctor = new Doctor("dsadasd", "noasfds", "dsklfhdsj", "doc-123", "Otorrinonaringología", ["012PM", "06PM"]);
    this.userService.create(doctor.toJSON()).then(res => {
      console.log("Usuario creado!");
    })

  }

}
