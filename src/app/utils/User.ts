export class User{
    // public userId:number=5;
    public email:string;
    public password:string;
    public role:string;

    constructor(email: string, password: string, role: string) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}