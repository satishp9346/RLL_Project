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

  apartmentsData:any[]=[];
  plotsData:any[]=[];
  villasData:any[]=[];
  constructor(private router:Router,private propertyService:PropertyService,private buyerService:BuyerRequestService){
    this.selectedType=localStorage.getItem("selectedType");
    if(this.selectedType=="apartment"){
    propertyService.getUnsoldApartments().subscribe((data)=>{
      this.apartmentsData=data;
      console.log(this.apartmentsData);
    })
  }
  if(this.selectedType==="plots"){
    propertyService.getUnsoldPlots().subscribe((data)=>{
      this.plotsData=data;
      console.log(this.plotsData);
    })
  }
  if(this.selectedType==="villa"){
    propertyService.getUnsoldVillas().subscribe((data)=>{
      this.villasData=data;
      console.log(this.villasData);
    })
  }
    console.log(this.selectedType);
  }
  ngOnInit(){
    // this.selectedType= this.propertyService.selectedType;
    // this.propertyListData=this.propertyService.propertyData[this.selectedType];
    // console.log(JSON.stringify(this.propertyListData)+"===>");
    // console.log("====>"+this.propertyListData.commonPropertyDetails.images[0]);
  }


  viewMore(property:any):void{
    this.buyerService.setRequestData(property).subscribe();
    // this.propertyService.setSelectedProperty(property);
    this.router.navigate(['/dashboard/buyer/property_card']);
  }
  


}
