import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminRequestsServiceService } from 'src/app/services/admin_request_service/admin-requests-service.service';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';

@Component({
  selector: 'app-list-admin-requests',
  templateUrl: './list-admin-requests.component.html',
  styleUrls: ['./list-admin-requests.component.css']
})
export class ListAdminRequestsComponent {
  propertyListData:any;
  selectedType:string;

  requests:any[]=[];
  
  constructor(private router:Router,private adminRequestService:AdminRequestsServiceService){ }


  profileData:any={}

  ngOnInit(){
    this.profileData=JSON.parse(sessionStorage.getItem("profile"));
    console.log(this.profileData+"====>");

    // this.adminRequestService.deleteRequest(0);

    // this.requests=this.adminRequestService.getRequests();
    this.adminRequestService.getAllProperties().subscribe((data) => {
      this.requests = data;
      console.log("get all method ==> ", data);
  
      // Now call getPropertyByEmail() after requestsData is populated

      this.requests = data.filter((item:any) => {
      const isMatch = item.propertyManager.user.email === this.profileData.propertyManager.user.email;
      console.log(isMatch + " verification");
      return isMatch; 
      });
    console.log(JSON.stringify(this.requests)+"reques===>");
    });
  }

  viewMore(property:any):void{
    console.log(JSON.stringify(property)+"====>hehe");
    this.adminRequestService.setRequestProperty(property).subscribe();
    this.router.navigate(['/dashboard/admin/admin_request_property_card']);
  }
}
