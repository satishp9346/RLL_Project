import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerRequestService {

  apiUrl='http://localhost:3002/request';

  constructor(private http:HttpClient) { }

  getRequestData():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  setRequestData(property:any):Observable<any>{
    return this.http.put(this.apiUrl,property);
  }

}
