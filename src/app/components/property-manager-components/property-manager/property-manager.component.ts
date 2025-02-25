import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyManagerServiceService } from 'src/app/services/property_manager/property-manager-service.service';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';

@Component({
  selector: 'app-property-manager',
  templateUrl: './property-manager.component.html',
  styleUrls: ['./property-manager.component.css']
})
export class PropertyManagerComponent {
  isRequestModalOpen = false;
  isSidebarOpen = true;
  showNotification = false;
  currentNotification: Notification | null = null;
 


  profile:any={};

  constructor(private r:Router,private propertyManagerRequestService:PropertyManagerRequestsService,private propManagerserv:PropertyManagerServiceService) {
    this.profile =JSON.parse(sessionStorage.getItem("profile"));
    console.log(this.profile);
  }
  propertyRequest:any;

  ngOnInit() {
    // this.propertyRequest=JSON.parse(localStorage.getItem("property"));
    let temp=this.propertyManagerRequestService.getRequests();

    console.log("data in property manager==>"+temp);
    const profile = sessionStorage.getItem('profile');
    if (profile) {
      this.profile = JSON.parse(profile);
      console.log("===>"+this.profile);
    }
  }
  buyersList:any[]=[];
  showBuyers(){
    this.r.navigate(["/dashboard/property_manager/list_buyers"]);
  }
  toggleRequestModal(request?: Request) {
    this.r.navigate(['/dashboard/property_manager/list_property_manager_request'])
  }
  setProperty(){
      localStorage.setItem("property",JSON.stringify({
        propertyRequest:this.propertyRequest,
        propertyManagerRequestStatus:"rejected"
      }));
  }


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  
  }
  propertyDetails(){
  this.r.navigate(['/dashboard/property_manager/common_property_list']);
}
  
  showSellers():void{
    this.r.navigate(['/dashboard/property_manager/list_sellers']);
  }
 
}
