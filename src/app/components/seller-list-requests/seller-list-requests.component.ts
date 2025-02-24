import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';
import { PropertyService } from 'src/app/services/property_service/property.service';
import { SellerRequestService } from 'src/app/services/seller-request-service/seller-request.service';

@Component({
  selector: 'app-seller-list-requests',
  templateUrl: './seller-list-requests.component.html',
  styleUrls: ['./seller-list-requests.component.css']
})
export class SellerListRequestsComponent {

  propertyListData:any;
  selectedType:string;

  requests:any[]=[];
  
  constructor(private router:Router,private propertyService:PropertyService,private requestService:PropertyManagerRequestsService,private sellerRequestService:SellerRequestService,private http:HttpClient){ }


  profileData:any={}
  

  ngOnInit() {
    this.profileData = JSON.parse(sessionStorage.getItem("profile"));
    console.log(this.profileData + "====>profile");
    // this.retrieveImages();
    // console.log("retrived images "+ this.retrievedImages)
    
    this.sellerRequestService.getSellerRequestData().subscribe((data) => {
      this.requests = data;
      console.log("get all method ==> ", data);
  
      // Now call getPropertyByEmail() after requestsData is populated

      this.requests = data.filter((item:any) => {
      const isMatch = item.propertyManager.user.email === this.profileData.propertyManager.user.email;
      console.log(isMatch + " verification");
      return isMatch; 
    })
    
      // this.decodeImages();
      console.log("===> request body JSON data: ", this.requests);
    });
  }

  // ngOnInit(){
    
  //   this.profileData=JSON.parse(sessionStorage.getItem("profile"));
  //   console.log(this.profileData+"====>profile");

    // this.requestService.clearRequests();

    // this.requests=this.requestService.getRequestByEmail(this.profileData.user.email);
    // this.requests=this.requestService.getPropertyByEmail(this.profileData.user.email);
    // this.decodeImages();
    // console.log(this.requests);
    // let temp=this.requestService.getRequests();
    // temp.map(item=>console.log(JSON.stringify(item)));
    // console.log(temp[0].user?.email);
    // console.log("===>request body jason data"+this.requests)

  // }

  viewMore(property:any):void{
    // this.requestService.setRequest(property);
    this.requestService.setRequestProperty(property).subscribe((data)=>{
      console.log("seted request property==>"+data);
      alert("request accepted");
    });
    this.router.navigate(['/dashboard/seller/seller_request_property_card']);
  }

}
