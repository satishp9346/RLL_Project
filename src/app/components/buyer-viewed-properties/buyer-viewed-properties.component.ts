import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-buyer-viewed-properties',
  templateUrl: './buyer-viewed-properties.component.html',
  styleUrls: ['./buyer-viewed-properties.component.css']
})
export class BuyerViewedPropertiesComponent {
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
        this.propService.getViewedbyBuyerInAprt(data.buyerId).subscribe(data=>{this.apartmentsData=data;console.log(this.apartmentsData)});
        this.propService.getViewedbyBuyerInPlots(data.buyerId).subscribe(data=>this.plotsData=data);
        this.propService.getViewedbyBuyerInVillas(data.buyerId).subscribe(data=>this.villasData=data);
        
      });
  }

  viewMore(proepety:any,type:string){
    sessionStorage.setItem("selectedType",type);
    this.router.navigate(['/dashboard/buyer/property_card']);
  }
}
