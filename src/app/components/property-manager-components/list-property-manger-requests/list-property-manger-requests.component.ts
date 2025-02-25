import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';

import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-list-property-manger-requests',
  templateUrl: './list-property-manger-requests.component.html',
  styleUrls: ['./list-property-manger-requests.component.css']
})
export class ListPropertyMangerRequestsComponent {

  propertyListData:any;
  selectedType:string;

  requests:any[]=[];
  
  constructor(private router:Router,private propertyService:PropertyService,private requestService:PropertyManagerRequestsService,private http:HttpClient,private sanitizer: DomSanitizer){ }


  profileData:any={}
  
  
  // decodeImages() {
  //   this.requests.forEach(property => {
  //     property.commonPropertyDetails.images = property.commonPropertyDetails.images.map(img => {
  //       return JSON.parse(atob(img)); // Decode Base64 and parse JSON
  //     });
  //   });
  // }
  // retrievedImages:any[]=[];
  // retrieveImages(): void {
  //   this.http.get('http://localhost:9091/api/tempImages/all', { responseType: 'json' }).subscribe(
  //       response => {
  //           const imagesArray = response as any[];
  //           this.retrievedImages = imagesArray.map(image => {
  //               const byteArray = new Uint8Array(image.imgData);
  //               const blob = new Blob([byteArray], { type: 'image/jpeg' });
  //               return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  //           });
  //           console.log("retidcjkd"+this.retrievedImages);
  //       },
  //       error => {
  //           console.error("Error retrieving images", error);
  //       }
  //   );
  // }

  buyRequestData:any[]=[];

  ngOnInit() {
    this.profileData = JSON.parse(sessionStorage.getItem("profile"));
    console.log(this.profileData + "====>profile");
    // this.retrieveImages();
    // console.log("retrived images "+ this.retrievedImages)
    
    this.requestService.getAllBuyRequests().subscribe((data)=>{
      console.log("data for buy requests"+data);
      this.buyRequestData=data;
    })

    this.requestService.getAllProperties().subscribe((data) => {
      this.requests = data;
      console.log("get all method ==> ", data);
  
      // Now call getPropertyByEmail() after requestsData is populated

    //   this.requests = data.filter((item:any) => {
    //   const isMatch = item.propertyManager.user.email === this.profileData.propertyManager.user.email;
    //   console.log(isMatch + " verification");
    //   return isMatch; 
    // })
    
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
      // alert("request accepted");
    });
    this.router.navigate(['/dashboard/property_manager/property_card_manager']);
  }
  sellProperty(property:any){
    this.propertyService.getBuyerbyUserId(property.buyer.user.userId).subscribe((data)=>{
      console.log("buyer===>"+data);
      this.propertyService.sellProperty(property.id,data).subscribe((data)=>{
        console.log(data+"data added success fully");
      })
    })
   
  }
}
