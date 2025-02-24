import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-individual-houses',
  templateUrl: './individual-houses.component.html',
  styleUrls: ['./individual-houses.component.css']
})
export class IndividualHousesComponent {
  propertyListData:any;
  

  constructor(private router:Router,private propertyService:PropertyService){
  }

  ngOninit(){
    this.propertyListData=this.propertyService.propertyData[this.propertyService.selectedType];
    console.log(JSON.stringify(this.propertyListData)+"===>");
  }
  viewMore(property:any):void{
    this.propertyService.setSelectedProperty(property);
    this.router.navigate(['/dashboard/buyer/property_card']);
  }
}
