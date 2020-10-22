import { User } from "../user/user";
export class Admin extends User{

    id:string;
    type:string[];
    workingTime: string;



    constructor(email: string, name:string, surname:string, id:string){
        super(email, name, surname);
        this.id = id;
    }
}
