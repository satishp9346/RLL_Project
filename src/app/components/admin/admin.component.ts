import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface UserProfile {
  name: string;
  email: string;
  phone: string;
  gender: string;
  password: string;
  address: string;
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
  selector: 'app-adimin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isRequestModalOpen = false;
  isSidebarOpen = true;
  showNotification = false;
  currentNotification: Notification | null = null;

  // Sample request data
 requests: Request[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      category: 'Buyer',
      email: 'rajesh.kumar@hyderabad.com',
      status: 'Pending',
      personalData: 'Confidential',
      date: '2025-02-19',
    },
    {
      id: 2, 
      name: 'Anita Sharma',
      category: 'Seller',
      email: 'anita.sharma@hyderabad.com',
      status: 'Pending',
      personalData: 'Confidential',
      date: '2025-02-18',
    },
    {
      id: 3,
      name: 'Syed Imran',
      category: 'Buyer',
      email: 'syed.imran@hyderabad.com',
      status: 'Pending',
      personalData: 'Confidential',
      date: '2025-02-17',
    }
  ];

  currentRequest: Request | null = null;

  userData: UserProfile = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    address: ''
  };

  profile:any={};

  // private defaultUserData: UserProfile = {
  //   name: 'Rajesh Kumar',
  //   email: 'rajesh.kumar@hyderabad.com',
  //   phone: '+91 98765 43210',
  //   gender: 'Male',
  //   password: 'currentpassword',
  //   address: '456 Hi-Tech City Road\nMadhapur\nHyderabad, Telangana 500081'
  // };

  filteredRequests: Request[];

  get pendingRequestsCount(): number {
    return this.requests.filter(req => req.status === 'Pending').length;
  }
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

  showNotificationMessage(notification: Notification) {
    this.currentNotification = notification;
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
      this.currentNotification = null;
    }, 5000);
  }

  constructor(private r:Router) {
    this.filteredRequests = this.requests;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // if (!this.isSidebarOpen) {
    //   const storedData = localStorage.getItem('userData');
    //   if (storedData) {
    //     this.userData = JSON.parse(storedData);
    //   }
    // }
  }

  toggleRequestModal(request?: Request) {
    if (request) {
      this.currentRequest = request;
    }
    this.isRequestModalOpen = !this.isRequestModalOpen;
  }

  // updateUserData() {
  //   if (this.validateForm()) {
  //     localStorage.setItem('userData', JSON.stringify(this.userData));
  //     this.showNotificationMessage({
  //       type: 'success',
  //       message: 'Profile Updated Successfully',
  //       details: `Name: ${this.userData.name}\nEmail: ${this.userData.email}\nPhone: ${this.userData.phone}`
  //     });
  //     this.toggleSidebar();
  //   }
  // }

  // validateForm(): boolean {
  //   if (!this.userData.name || !this.userData.email || !this.userData.phone) {
  //     this.showNotificationMessage({
  //       type: 'error',
  //       message: 'Validation Error',
  //       details: 'Please fill in all required fields (Name, Email, and Phone)'
  //     });
  //     return false;
  //   }

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(this.userData.email)) {
  //     this.showNotificationMessage({
  //       type: 'error',
  //       message: 'Validation Error',
  //       details: 'Please enter a valid email address'
  //     });
  //     return false;
  //   }

  //   const phoneRegex = /^\+?[\d\s-()]+$/;
  //   if (!phoneRegex.test(this.userData.phone)) {
  //     this.showNotificationMessage({
  //       type: 'error',
  //       message: 'Validation Error',
  //       details: 'Please enter a valid phone number'
  //     });
  //     return false;
  //   }

  //   return true;
  // }

  acceptRequest() {
    if (this.currentRequest) {
      this.currentRequest.status = 'Accepted';
      this.showNotificationMessage({
        type: 'success',
        message: 'Request Accepted',
        details: `Name: ${this.currentRequest.name}\nCategory: ${this.currentRequest.category}\nEmail: ${this.currentRequest.email}`
      });
      this.toggleRequestModal();
    }
  }

  declineRequest() {
    if (this.currentRequest) {
      this.currentRequest.status = 'Declined';
      this.showNotificationMessage({
        type: 'error',
        message: 'Request Declined',
        details: `Name: ${this.currentRequest.name}\nCategory: ${this.currentRequest.category}\nEmail: ${this.currentRequest.email}`
      });
      this.toggleRequestModal();
    }
  }

  searchTerm = '';
  currentFilter = 'All';

  closeRequestModal() {
    this.isRequestModalOpen = false;
    this.currentRequest = null;
    this.resetFilters();
  }

  backToList() {
    this.currentRequest = null;
  }

  viewRequestDetails(request: Request) {
    this.currentRequest = request;
  }

  resetFilters() {
    this.searchTerm = '';
    this.currentFilter = 'All';
    this.filteredRequests = this.requests;
  }

  filterRequests() {
    this.filteredRequests = this.requests.filter(request => {
      const matchesSearch = this.searchTerm ? 
        request.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.category.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const matchesStatus = this.currentFilter === 'All' ? 
        true : 
        request.status === this.currentFilter;

      return matchesSearch && matchesStatus;
    });
  }

  filterByStatus(status: string) {
    this.currentFilter = status;
    this.filterRequests();
  }

  getCategoryIcon(category: CategoryType): string {
    const icons: Record<CategoryType, string> = {
      'Buyer': 'fa-shopping-cart',
      'Seller': 'fa-store',
      'Property Manager': 'fa-building'
    };
    return icons[category];
  }

  sellers():void{
    this.r.navigate(['/seller'])
  }
}
