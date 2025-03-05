import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  isRequestModalOpen = false;
   isSidebarOpen = true;
   showNotification = false;
   currentNotification: Notification | null = null;

  
  notificationVisible=false;
  notificationVisible1=false;

  openPopup:boolean=true;
  
  displayPopup(){
    this.openPopup=!this.openPopup;
  }
 
 
 
  

  apartments():void{
    this.router.navigate(['/appartment']);
  }
  plots():void{
    this.router.navigate(['/plot']);
  }
  villas():void{
    this.router.navigate(['/villas']);
  }
  
    currentRequest: Request | null = null;
  
   
    profile:any={};
    constructor(private router:Router){
      this.profile =JSON.parse(sessionStorage.getItem("profile"));
      console.log(this.profile);
    }

    redirectToReq() {
      this.router.navigate(['/dashboard/seller/seller_list_requests']);
    }
  
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  
    ngOnInit() {
      const profile = sessionStorage.getItem('profile');
      if (profile) {
        this.profile = JSON.parse(profile);
        console.log("===>"+this.profile);
      }
    }
  
    showNotificationMessage(notification: Notification) {
      this.currentNotification = notification;
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
        this.currentNotification = null;
      }, 5000);
    }
  
  
  
    toggleRequestModal(request?: Request) {
      if (request) {
        this.currentRequest = request;
      }
      this.isRequestModalOpen = !this.isRequestModalOpen;
    }
  
  
   
  
    // ():void{
    //   this.router.navigate(['/dashboard/seller/'])
    // }

}

