import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent {

  propertyListData:any;
  

  constructor(private router:Router,private propertyService:PropertyService){
    
  }

  ngOnInit(){
    this.propertyListData=this.propertyService.propertyData[this.propertyService.selectedType];
    console.log(JSON.stringify(this.propertyListData)+"===>");
    console.log("====>"+this.propertyListData[0].commonPropertyDetails.images[0])
  }

  viewMore(property:any):void{
    this.propertyService.setSelectedProperty(property);
    this.router.navigate(['/dashboard/buyer/property_card']);
  }
}
