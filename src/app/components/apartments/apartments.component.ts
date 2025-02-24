import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerRequestService } from 'src/app/services/buyer-service/buyer-request.service';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {


  // propertyListData:any;
  selectedType:string;
  profileData:any;
  apartmentsData:any[]=[];
  plotsData:any[]=[];
  villasData:any[]=[];
  constructor(private router:Router,private propertyService:PropertyService,private buyerService:BuyerRequestService){
    
  }
  ngOnInit(){
    this.selectedType=localStorage.getItem("selectedType");
    const profile = sessionStorage.getItem('profile');
      if (profile) {
        this.profileData = JSON.parse(profile);
        console.log("===>"+this.profileData);
        
      }
    if(this.selectedType=="apartment"){
    this.propertyService.getUnsoldApartments().subscribe((data)=>{
      this.apartmentsData=data;
      console.log(this.apartmentsData);
    })
  }
  if(this.selectedType==="plots"){
    this.propertyService.getUnsoldPlots().subscribe((data)=>{
      this.plotsData=data;
      console.log(this.plotsData);
    })
  }
  if(this.selectedType==="villa"){
    this.propertyService.getUnsoldVillas().subscribe((data)=>{
      this.villasData=data;
      console.log(this.villasData);
    })
  }
    console.log(this.selectedType);
    // this.selectedType= this.propertyService.selectedType;
    // this.propertyListData=this.propertyService.propertyData[this.selectedType];
    // console.log(JSON.stringify(this.propertyListData)+"===>");
    // console.log("====>"+this.propertyListData.commonPropertyDetails.images[0]);
  }


  viewMore(property:any):void{
    this.propertyService.getBuyerbyUserId(this.profileData.user.userId).subscribe((data)=>{
      console.log("buyer data===>"+data);
      if(this.selectedType==='apartment')
        this.propertyService.addToAprtmntViewed(property.apartmentId,data.buyerId).subscribe(data=>console.log(data));
      if(this.selectedType==='plots')
        this.propertyService.addToPlotViewed(property.plotId,data.buyerId).subscribe(data=>console.log(data));
      if(this.selectedType==='villa')
        this.propertyService.addToVillaViewed(property.idividualId,data.buyerId).subscribe(data=>console.log(data));
      this.buyerService.setRequestData(property).subscribe();
      // this.propertyService.setSelectedProperty(property);
      this.router.navigate(['/dashboard/buyer/property_card']);
    });
 
  }
  


}
