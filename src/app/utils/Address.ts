export class Address{
    public doorNum:string;
    public street:string;
    public city:string;
    public district:string;
    public state:string;
    public pinCode:string;
    public country:string;
    constructor(doorNum:string, street: string, city: string, district: string, state: string,pinCode:string,country:string) {
        this.doorNum = doorNum;
        this.street = street;
        this.city = city;
        this.district = district;
        this.state = state;
        this.pinCode = pinCode;
        this.country=country;
    }
}