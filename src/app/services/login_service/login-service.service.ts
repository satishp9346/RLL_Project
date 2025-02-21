import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RealEstateWebUrl } from '../../utils/RealEstateWebUrl'
import { User } from 'src/app/utils/User';
import { UserResponse } from 'src/app/utils/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient:HttpClient) { }
  checkUser(email:string,pwd:string):Observable<any>{
    return this.httpClient.get<any>(RealEstateWebUrl.LOGIN_WEBURL+"?email="+email+"&password="+pwd);
  }
  addUser(puser:UserResponse):Observable<any>{
    return this.httpClient.post(RealEstateWebUrl.LOGIN_WEBURL+"/add",puser,{responseType:'json'});
  }
  updateUser(pUser:UserResponse):Observable<any>{
    return this.httpClient.put(RealEstateWebUrl.LOGIN_WEBURL+"/update",pUser,{responseType:'json'});
  }
}
