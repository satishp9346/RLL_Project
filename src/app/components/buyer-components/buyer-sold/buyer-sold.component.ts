import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-buyer-sold',
  templateUrl: './buyer-sold.component.html',
  styleUrls: ['./buyer-sold.component.css']
})
export class BuyerSoldComponent {
 selectedProperty:any;
  comProperty:any;
  address:any;

  selectedType:string;
  profileData:any;

  loopData:any[]=[];

  apartmentsData:any[]=[];
  plotsData:any[]=[];
  villasData:any[]=[];

  constructor(private propService:PropertyService,private router:Router){}

  ngOnInit(){
    const profile = sessionStorage.getItem('profile');
      if (profile) {
        this.profileData = JSON.parse(profile);
        console.log("===>"+this.profileData);
        
      }
      this.propService.getBuyerbyUserId(this.profileData.user.userId).subscribe((data)=>{
        console.log("buyer data in favourate"+data);
        this.propService.getSoldDataofAprt(data.buyerId).subscribe(data=>{this.apartmentsData=data;console.log(this.apartmentsData)});
        this.propService.getSoldDataofPlots(data.buyerId).subscribe(data=>this.plotsData=data);
        this.propService.getSoldDataofVillas(data.buyerId).subscribe(data=>this.villasData=data);
        
      });
  }

  viewMore(proepety:any,type:string){
    sessionStorage.setItem("selectedType",type);
    localStorage.setItem("BuyedData",JSON.stringify(proepety));
      this.router.navigate(['/dashboard/buyer/buyer_bought_view']);
  
  }
}
