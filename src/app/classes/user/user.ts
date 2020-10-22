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
    
    
    
}
