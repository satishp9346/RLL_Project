import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerRequestService } from 'src/app/services/buyer-service/buyer-request.service';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-buyer-favourate-properties',
  templateUrl: './buyer-favourate-properties.component.html',
  styleUrls: ['./buyer-favourate-properties.component.css']
})
export class BuyerFavouratePropertiesComponent {

  selectedProperty:any;
  comProperty:any;
  address:any;

  selectedType:string;
  profileData:any;

  loopData:any[]=[];

  apartmentsData:any[]=[];
  plotsData:any[]=[];
  villasData:any[]=[];

  constructor(private propService:PropertyService,private router:Router,private buyerService:BuyerRequestService){}

  ngOnInit(){
    const profile = sessionStorage.getItem('profile');
      if (profile) {
        this.profileData = JSON.parse(profile);
        console.log("===>"+this.profileData);
        
      }
      this.propService.getBuyerbyUserId(this.profileData.user.userId).subscribe((data)=>{
        console.log("buyer data in favourate"+data);
        this.propService.getFavoratesOfBuyerInAprt(data.buyerId).subscribe(data=>{this.apartmentsData=data;console.log(this.apartmentsData)});
        this.propService.getFavoratesOfBuyerInPlots(data.buyerId).subscribe(data=>this.plotsData=data);
        this.propService.getFavoratesOfBuyerInVillas(data.buyerId).subscribe(data=>this.villasData=data);
        
      });
  }

  viewMore(proepety:any,type:string){
    sessionStorage.setItem("selectedType",type);
    this.buyerService.setRequestData(proepety).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/dashboard/buyer/property_card']);
    });
  }

}
