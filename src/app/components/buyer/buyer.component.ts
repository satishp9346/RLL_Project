import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent {

  isSidebarOpen = true;
  profile:any={};
  constructor(private router:Router){
    this.profile =JSON.parse(sessionStorage.getItem("profile"));
    console.log(this.profile);
  }
  

  ngOnInit() {
    const profile = sessionStorage.getItem('profile');
    if (profile) {
      this.profile = JSON.parse(profile);
      console.log("===>"+this.profile);
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  viewedProperties(){ 
    this.router.navigate(['/dashboard/buyer/viewed']);
  }
  favourate(){
    this.router.navigate(['/dashboard/buyer/favourite']);
  }
  
}
