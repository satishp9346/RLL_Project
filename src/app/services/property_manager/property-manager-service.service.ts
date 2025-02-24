import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyManagerServiceService {

  PROPERTY_MANAGER_WEBURL="http://localhost:9091/property_manager"

 

  constructor(private httpClient:HttpClient) { }

  getAllPropertyMagers():Observable<any>{
    return this.httpClient.get<any>(this.PROPERTY_MANAGER_WEBURL);
  }


}
