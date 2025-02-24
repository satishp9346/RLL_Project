import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerRequestService {

  apiUrl='http://localhost:3004/seller';
  
  constructor(private http:HttpClient) { }

  getSellerRequestData():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  addSellerRequestData(property:any):Observable<any>{
    return this.http.post(this.apiUrl,property,{responseType:'json'});
  }
  


}
