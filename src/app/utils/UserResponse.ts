import { User } from "./User";
import { userCommonDetails } from "./UserCommonDetails";

export class UserResponse{
    public user:User;
    public userCommonDetails:userCommonDetails;
    constructor(user:User,userCommonDetails:userCommonDetails){
        this.user=user;
        this.userCommonDetails=userCommonDetails
    }
}