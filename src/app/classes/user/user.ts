export class User {
    private email: string;
    private name: string;
    private surname: string;



    constructor (email: string, name:string, surname:string) {
        this.Email = email;
        this.name = name;
        this.surname = surname;
    }
    
    public get Email() : string {
        return this.email;
    }    

    
    public set Email(email : string) {
        this.email = email;
    }

    
    public get Name() : string {
        return this.name;
    }

    
    public set Name(v : string) {
        this.name = v;
    }

    
    public get Surname() : string {
        return this.surname;
    }
    
    
    public set Surname(v : string) {
        this.surname = v;
    }
    
    
    
    
    
}
