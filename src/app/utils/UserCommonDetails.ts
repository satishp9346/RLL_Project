import { Address } from "./Address";

export class userCommonDetails{
    // public userComId:number=3;
    public firstName:string;
    public lastName:string;
    public gender:string;
    public age:number;
    public mobileNo:string;
    public address:Address;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNo: string, address: Address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNo = mobileNo;
        this.address = address;
    }
    
}