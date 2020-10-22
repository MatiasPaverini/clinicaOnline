import { User } from "../user/user";

export class Patient extends User{

    id:string;

    constructor(email: string, name:string, surname:string, id:string){
        super(email, name, surname);
        this.id = id;
    }

}
