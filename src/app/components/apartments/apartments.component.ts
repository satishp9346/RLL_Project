import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  property = {
    price: "65.0 Lac",
    title: "2 BHK Flat For Sale in Hadapsar, Pune",
    bhk: 2,
    baths: 2,
    balconies:3,
    furnishing: "Furnished",
    facing:"South",
    images: [
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74166254298036/QS1042/QS1042-Q1/IMG_20230406_183718.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74166254298036/QS1042/QS1042-Q1/IMG_20230406_183718.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74166254298036/QS1042/QS1042-Q1/IMG_20230406_183718.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74166254298036/QS1042/QS1042-Q1/IMG_20230406_183718.jpg"
    ],
    details: [
      { label: "Carpet Area", value: "740 sqft" },
      { label: "Developer", value: "Subhash Builders" },
      { label: "Apartment Name", value: "Vardhaman Township" },
      { label: "Floor", value: "4th Floor" },
      { label: "Transaction Type", value: "Resale" },
      { label: "Status", value: "Ready to Move" }
    ]
  };

  propertyListData:any;
  

  constructor(private router:Router,private propertyService:PropertyService){
    this.propertyListData=this.propertyService.propertyData[this.propertyService.selectedType];
    console.log(JSON.stringify(this.propertyListData)+"===>");
    console.log("====>"+this.propertyListData.commonPropertyDetails.images[0])
  }

  OnInit(){
    this.propertyListData=this.propertyService.propertyData[this.propertyService.selectedType];
    console.log(JSON.stringify(this.propertyListData)+"===>");
    console.log("====>"+this.propertyListData.commonPropertyDetails.images[0])
  }

  viewMore(property:any):void{
    this.propertyService.setSelectedProperty(property);
    this.router.navigate(['/dashboard/buyer/property_card']);
  }
  


}
