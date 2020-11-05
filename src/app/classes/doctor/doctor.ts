
import { User } from "../user/user";

export class Doctor extends User {
    id: string;
    speciality: string;
    workingHours: string[] = [];
    workingDays: string[] = [];

    constructor(email: string, name: string, surname: string, id: string, speciality: string, workingHours?: string[], workingDays?: string[]) {
        super(email, name, surname);
        this.id = id;
        this.speciality = speciality;
        this.workingHours = workingHours;
        this.workingDays = workingDays
    }

    toJSON() {
        return { "type": "doctor", "email": this.Email, "id": this.id, "name": this.Name, "surname": this.Surname, "speciality": this.speciality, "workingHours": this.workingHours, "workingDays": this.workingDays }
    }

}
