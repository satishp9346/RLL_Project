import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface sellerProfile{
  name:string,
  email: string,
  phone: string,
  gender: string,
  password: string,
  address:string
}
type CategoryType = 'Buyer' | 'Seller' | 'Property Manager';

interface Request {
  id: number;
  name: string;
  category: CategoryType;
  email: string;
  status: 'Pending' | 'Accepted' | 'Declined';
  personalData: string;
  date: string;
}
interface Notification {
  type: 'success' | 'error' | 'info';
  message: string;
  details?: string;
}
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

  toggleNotification() {
    this.notificationVisible=!this.notificationVisible;
  }
  toggleNotification1() {
    this.notificationVisible1=!this.notificationVisible1;
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
  
    userData: sellerProfile = {
      name: '',
      email: '',
      phone: '',
      gender: '',
      password: '',
      address: ''
    };
  
    private defaultUserData: sellerProfile = {
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@hyderabad.com',
      phone: '+91 98765 43210',
      gender: 'Male',
      password: 'currentpassword',
      address: '456 Hi-Tech City Road\nMadhapur\nHyderabad, Telangana 500081'
    };

    profile:any={};
    constructor(private router:Router){
      this.profile =JSON.parse(sessionStorage.getItem("profile"));
      console.log(this.profile);
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
  
    updateUserData() {
      if (this.validateForm()) {
        localStorage.setItem('userData', JSON.stringify(this.userData));
        this.showNotificationMessage({
          type: 'success',
          message: 'Profile Updated Successfully',
          details: `Name: ${this.userData.name}\nEmail: ${this.userData.email}\nPhone: ${this.userData.phone}`
        });
        this.toggleSidebar();
      }
    }
  
    validateForm(): boolean {
      if (!this.userData.name || !this.userData.email || !this.userData.phone) {
        this.showNotificationMessage({
          type: 'error',
          message: 'Validation Error',
          details: 'Please fill in all required fields (Name, Email, and Phone)'
        });
        return false;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.userData.email)) {
        this.showNotificationMessage({
          type: 'error',
          message: 'Validation Error',
          details: 'Please enter a valid email address'
        });
        return false;
      }
  
      const phoneRegex = /^\+?[\d\s-()]+$/;
      if (!phoneRegex.test(this.userData.phone)) {
        this.showNotificationMessage({
          type: 'error',
          message: 'Validation Error',
          details: 'Please enter a valid phone number'
        });
        return false;
      }
  
      return true;
    }
  
    resetToDefault() {
      this.userData = { ...this.defaultUserData };
      localStorage.setItem('userData', JSON.stringify(this.userData));
      this.showNotificationMessage({
        type: 'info',
        message: 'Profile Reset',
        details: 'Profile has been reset to default values'
      });
    }
  
    searchTerm = '';
    currentFilter = 'All';
  
  
    getCategoryIcon(category: CategoryType): string {
      const icons: Record<CategoryType, string> = {
        'Buyer': 'fa-shopping-cart',
        'Seller': 'fa-store',
        'Property Manager': 'fa-building'
      };
      return icons[category];
    }
  
    sellers():void{
      this.router.navigate(['/dashboard/seller/'])
    }

}

