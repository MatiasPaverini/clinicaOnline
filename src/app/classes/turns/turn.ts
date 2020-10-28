import { Patient } from "../patient/patient";
import { Doctor } from "../doctor/doctor";

export class Turn {

    pacient: Patient;
    doctor: Doctor;
    date: string;
    time: string;

    public toJSON() {
        return {"pacient": this.pacient, "doctor": this.doctor, "date": this.date, "time": this.time};
    }

}
