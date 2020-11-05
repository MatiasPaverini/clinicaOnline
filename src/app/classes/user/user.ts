export class User {
    private email: string;
    private name: string;
    private surname: string;
    private type: string;



    constructor (email: string, name:string, surname:string, type?:string) {
        this.Email = email;
        this.name = name;
        this.surname = surname;
        this.Type = type;
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

    
    public get Type() : string {
        return this.type;
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

    
    public set Type(v : string) {
        this.type = v;
    }
    
    
    
    
    
    
}
