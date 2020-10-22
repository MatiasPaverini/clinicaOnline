export class User {
    private email: string;


    constructor (email: string) {
        this.Email = email;
    }
    
    public get Email() : string {
        return this.email;
    }    

    
    public set Email(email : string) {
        this.email = email;
    }
    
    
    
}
