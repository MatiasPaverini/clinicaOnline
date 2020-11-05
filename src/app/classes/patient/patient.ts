import { User } from "../user/user";

export class Patient extends User{

    id:string;

    constructor(email: string, name:string, surname:string, id:string){
        super(email, name, surname);
        this.id = id;
    }

    public toJSON() {
        return {"type": "patient", "email": this.Email, "name": this.Name, "surname": this.Surname, "id": this.id};
    }

}
