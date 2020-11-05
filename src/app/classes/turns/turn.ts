import { Patient } from "../patient/patient";
import { Doctor } from "../doctor/doctor";

export class Turn {

    patient: Patient;
    doctor: Doctor;
    date: string;
    time: string;
    id: string;
    status

    constructor(patient:Patient, doctor:Doctor, time:string, date: string, id: string, status: string = "Sin Aceptar") {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.id = id;
        this.status = status;
    }

    public toJSON() {
        let patient = this.patient.toJSON();
        let doctor = this.doctor.toJSON();
        return {"id": this.id, "pacient": patient, "doctor": doctor, "date": this.date, "time": this.time, "status": this.status};
    }

}
