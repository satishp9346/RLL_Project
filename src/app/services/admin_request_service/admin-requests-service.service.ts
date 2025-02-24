import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRequestsServiceService {

  private storageKey = 'adminRequests';
  private requestKey = 'adminRequestPropert';

  request: any = {};
  requests: any[] = [];

  private apiUrl="http://localhost:3001/requests";
  private apiUrlRequest="http://localhost:3001/request";
    
  private apiApartments="http://localhost:9091/apartment"
  private apiPlots="http://localhost:9091/plots"
  private apiVillas="http://localhost:9091/villas"

  constructor(private http:HttpClient) {
    this.loadRequests();
    this.loadRequest();
  }

  addApartment(property:any):Observable<any>{
    return this.http.post(this.apiApartments+"/add",property,{responseType:'json'});
  }

  getAllApartment():Observable<any>{
    return this.http.get<any>(this.apiApartments);
  }

  addPlots(property:any):Observable<any>{
    return this.http.post(this.apiPlots+"/add",property,{responseType:'json'});
  }

  getAllPlots():Observable<any>{
    return this.http.get<any>(this.apiPlots);
  }
  addVilla(property:any):Observable<any>{
    return this.http.post(this.apiVillas+"/add",property,{responseType:'json'});
  }

  getAllVillas():Observable<any>{
    return this.http.get<any>(this.apiVillas);
  }



  addProperty(property:any):Observable<any>{
    return this.http.post(this.apiUrl,property,{responseType:'json'});
  } 
  getAllProperties():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  setRequestProperty(property:any):Observable<any>{
    return this.http.put(this.apiUrlRequest,property,{responseType:'json'});
  }
  getRequestProperty():Observable<any>{
    return this.http.get<any>(this.apiUrlRequest);
  }

  private saveRequests(): void {
    console.log("from admin service", this.requests);
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.requests));
  }

  private loadRequests(): void {
    const storedRequests = sessionStorage.getItem(this.storageKey);
    if (storedRequests) {
      this.requests = JSON.parse(storedRequests);
    }
  }

  getRequests(): any[] {
    return this.requests;
  }

  addRequest(request: any): void {
    console.log("from admin service", JSON.stringify(request));
    this.requests.push(request);
    this.saveRequests();
  }

  updateRequest(index: number, updatedRequest: any): void {
    if (index >= 0 && index < this.requests.length) {
      this.requests[index] = updatedRequest;
      this.saveRequests();
    }
  }

  deleteRequest(index: number): void {
    if (index >= 0 && index < this.requests.length) {
      this.requests.splice(index, 1);
      this.saveRequests();
    }
  }

  getRequestByIndex(index: number): any {
    if (index >= 0 && index < this.requests.length) {
      return this.requests[index];
    }
    return null;
  }

  getRequestByEmail(email: string): any {
    return this.requests.filter(request => request.propertyManager.user.email === email);
  }

  // Save request to session storage
  private saveRequest(): void {
    sessionStorage.setItem(this.requestKey, JSON.stringify(this.request));
  }

  // Load request from session storage
  private loadRequest(): void {
    const storedRequest = sessionStorage.getItem(this.requestKey);
    if (storedRequest) {
      this.request = JSON.parse(storedRequest);
    }
  }

  // Set request
  setRequest(request: any): void {
    this.request = request;
    this.saveRequest();
  }

  // Get request
  getRequest(): any {
    return this.request;
  }

  // Clear request
  clearRequest(): void {
    this.request = {};
    sessionStorage.removeItem(this.requestKey);
  }
}
