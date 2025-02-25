import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adimin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isRequestModalOpen = false;
  isSidebarOpen = true;
  showNotification = false;
  currentNotification: Notification | null = null;
  constructor(private r:Router) {

  }
 
  profile:any={};

  propertyRequest:any;

  ngOnInit() {
    this.propertyRequest=JSON.parse(localStorage.getItem("property"));
    (this.propertyRequest.propertyManagerRequestStatus==="accepted")?
    console.log("data in admin module==>"+JSON.stringify(this.propertyRequest)):
    console.log("property manager regected");
    const profile = sessionStorage.getItem('profile');
    if (profile) {
      this.profile = JSON.parse(profile);
      console.log("===>"+this.profile);
    }
  }



  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    
  }

  toggleRequestModal(request?: Request) {
    this.r.navigate(['/dashboard/admin/list_admin_requests'])
  }
  showBuyers(){
    this.r.navigate(["/dashboard/admin/list_buyers"]);
  }
  showSellers():void{
    this.r.navigate(['/dashboard/admin/list_sellers']);
  }
  showPropertyManagers():void{
    this.r.navigate(['/dashboard/admin/list_property_managers']);
  }

}
