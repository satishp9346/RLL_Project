import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyManagerRequestsService {
  private storageKey = 'propertyManagerRequests';

  private requestKey='requestPropert';
  request:any={}

  private apiUrl="http://localhost:3000/requests";
  private apiUrlRequest="http://localhost:3000/request";
    
  buyRequestUrl="http://localhost:3000/buyRequests";
  constructor(private http:HttpClient) {
    this.loadRequests();
    this.loadRequest();
  }

  
  getAllBuyRequests():Observable<any>{
    return this.http.get<any>(this.buyRequestUrl);
  }

  addBuyRequest(property:any):Observable<any>{
    return this.http.post(this.buyRequestUrl,property,{responseType:'json'});
  }
  
  requestsData:any[]=[]
  // ngOnInit(){
  //   this.getAllProperties().subscribe((data)=>{this.requestsData=data;console.log("get all method==>"+data)});
  // }

  addProperty(property:any):Observable<any>{
    return this.http.post(this.apiUrl,property,{responseType:'json'});
  } 
  getAllProperties():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  getPropertyByEmail(email: string): any[] {
    return this.requestsData.filter((data) => {
      const isMatch = data.propertyManager.user.email === email;
      console.log(isMatch + " verification");
      return isMatch; 
    });
  }

  setRequestProperty(property:any):Observable<any>{
    return this.http.put(this.apiUrlRequest,property,{responseType:'json'});
  }
  getRequestProperty():Observable<any>{
    return this.http.get<any>(this.apiUrlRequest);
  }


  requests:any[] = [];

  private saveRequests(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.requests));
  }

 

  private loadRequests(): void {
    const storedRequests = localStorage.getItem(this.storageKey);
    if (storedRequests) {
      this.requests = JSON.parse(storedRequests);
    }
  }

  getRequests(): any[] {
    return this.requests;
  }


  addRequest(request: any): void {
    this.requests.push(request);
    this.saveRequests();
  }

  updateRequest(index: number, updatedRequest: any): void {
    if (index >= 0 && index < this.requests.length) {
      this.requests[index] = updatedRequest;
      this.saveRequests();
    }
  }

  deleteRequest(propertyId: any): Observable<any> {
    // const options = { body: property }; // Pass the property as the body inside options
    return this.http.delete(`${this.apiUrl}/${propertyId}`);
  }

  getRequestByIndex(index: number): any {
    if (index >= 0 && index < this.requests.length) {
      return this.requests[index];
    }
    return null;
  }

  getRequestByEmail(email: string): any {
    console.log("Email===>"+email)
    return this.requests.filter(request => request.propertyManager?.user.email === email);
  }
  clearRequests(): void {
    this.request = {};
    localStorage.removeItem(this.storageKey);
  }
  // Method to save request to local storage
  private saveRequest(): void {
    localStorage.setItem(this.requestKey, JSON.stringify(this.request));
  }

  // Method to load request from local storage
  private loadRequest(): void {
    const storedRequest = localStorage.getItem(this.requestKey);
    if (storedRequest) {
      this.request = JSON.parse(storedRequest);
    }
  }

  // Method to set request
  setRequest(request: any): void {
    this.request = request;
    this.saveRequest();
  }

  // Method to get request
  getRequest(): any {
    return this.request;
  }

  // Additional methods to clear request
  clearRequest(): void {
    this.request = {};
    localStorage.removeItem(this.requestKey);
  }

}
