import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent {

  constructor(private router:Router,private propertyService:PropertyService){}
  viewPropertList(redirect:string,selectedProperty:string):void{
    console.log(redirect+"  "+selectedProperty);
    this.propertyService.setSelectedType(selectedProperty);
    this.router.navigate([`${redirect}`]);
  }

}
