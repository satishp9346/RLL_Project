import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRequestsServiceService } from 'src/app/services/admin_request_service/admin-requests-service.service';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';
import { SellerRequestService } from 'src/app/services/seller-request-service/seller-request.service';

@Component({
  selector: 'app-property-card-manager',
  templateUrl: './property-card-manager.component.html',
  styleUrls: ['./property-card-manager.component.css']
})
export class PropertyCardManagerComponent {

  selectedProperty:any;
  comProperty:any;
  address:any;
  selectedType:string;

  loopData:any[]=[];

  constructor(private router:Router,private requsetService:PropertyManagerRequestsService,private adminRequsetService:AdminRequestsServiceService,private sellerService:SellerRequestService){
    // // this.selectedProperty=this.requsetService.getRequest();
    // this.requsetService.getRequestProperty().subscribe((data)=>{
    //   console.log("got the data from request proepety"+data);
    //   this.selectedProperty=data;
    //   this.comProperty=this.selectedProperty.commonPropertyDetails;
    //   this.address=this.selectedProperty.commonPropertyDetails.address;
    //   let fullAddress=`${this.address.doorNum}, ${this.address.street}, ${this.address.city}, ${this.address.district}, ${this.address.state}, ${this.address.country}, ${this.address.pinCode}`;
    //   this.loopData= [
    //     { label: "Carpet Area", value: this.comProperty.carpetArea },
    //     { label: "Developer", value: this.comProperty.developer },
    //     { label: "Apartment Name", value: this.selectedProperty.apartmentName },
    //     { label: "Floor", value: `${this.selectedProperty.floorNo} Floor`},
    //     { label: "No.Of Lifts", value: `${this.selectedProperty.noOfLifts} Lifts Available`},
    //     { label: "Transaction Type", value: this.comProperty.transactionType},
    //     { label: "Status", value: this.comProperty.status },
    //     { label: "Facing", value: this.comProperty.facing },
    //     { label: "Price Breakup", value: `${this.comProperty.price} | ₹${this.comProperty.registrationCharges} Approx. Registration Charges` },
    //     { label: "Booking Amount", value: `₹${this.comProperty.bookingAmount}` },
    //     { label: "Address", value: fullAddress },
    //     { label: "Furnishing", value: this.selectedProperty.furnishedStatus },
    //     { label: "Age Of Construction", value: this.selectedProperty.ageOfConstruction },
    //     { label: "Water Availability", value: this.selectedProperty.waterAvailability },
    //     { label: "Status Of Electricity", value: this.selectedProperty.statusOfElectricity },
        
  
    //   ]
    // });
    
    // console.log(JSON.stringify(this.requsetService.getRequest()));
  }

  


  ngOnInit(){
    // this.selectedType=localStorage.getItem("selectedType");
    
    this.requsetService.getRequestProperty().subscribe((data)=>{
      this.selectedProperty=data;
      console.log(JSON.stringify(this.selectedProperty)+"==>");
    this.selectedType=this.selectedProperty.propertyType;
    console.log(this.selectedType)
    this.comProperty=this.selectedProperty.commonPropertyDetails;
    this.address=this.selectedProperty.commonPropertyDetails.address;
    let fullAddress=`${this.address.doorNum}, ${this.address.street}, ${this.address.city}, ${this.address.district}, ${this.address.state}, ${this.address.country}, ${this.address.pinCode}`;
    if(this.selectedType==="apartment"){
    this.loopData= [
      { label: "Carpet Area", value: `${this.comProperty.carpetArea} Sqft` },
      { label: "Developer", value: this.comProperty.developer },
      { label: "Apartment Name", value: this.selectedProperty.apartmentName },
      { label: "Floor", value: `${this.selectedProperty.floorNo} Floor`},
      { label: "No.Of Lifts", value: `${this.selectedProperty.noOfLifts} Lifts Available`},
      { label: "Transaction Type", value: this.comProperty.transactionType},
      { label: "Status", value: this.comProperty.status },
      { label: "Facing", value: this.comProperty.facing },
      { label: "Price Breakup", value: `${this.comProperty.price} | ₹${this.comProperty.registrationCharges} Approx. Registration Charges` },
      { label: "Booking Amount", value: `₹${this.comProperty.bookingAmount}` },
      { label: "Address", value: fullAddress },
      { label: "Furnishing", value: this.selectedProperty.furnishedStatus },
      { label: "Age Of Construction", value: this.selectedProperty.ageOfConstruction },
      { label: "Water Availability", value: this.selectedProperty.waterAvailability },
      { label: "Status Of Electricity", value: this.selectedProperty.statusOfElectricity },
    ]
  }
  if(this.selectedType==="plots"){
    this.loopData= [
      { label: "Carpet Area", value: `${this.comProperty.carpetArea} Sqft` },
      { label: "Developer", value: this.comProperty.developer },
      { label: "Transaction Type", value: this.comProperty.transactionType},
      { label: "Status", value: this.comProperty.status },
      { label: "Facing", value: this.comProperty.facing },
      { label: "Price Breakup", value: `${this.comProperty.price} | ₹${this.comProperty.registrationCharges} Approx. Registration Charges` },
      { label: "Booking Amount", value: `₹${this.comProperty.bookingAmount}` },
      { label: "Address", value: fullAddress },

    ]
  }
  if(this.selectedType==="villa"){
    this.loopData= [
      { label: "Carpet Area", value: `${this.comProperty.carpetArea} Sqft` },
      { label: "Developer", value: this.comProperty.developer },
      { label: "Transaction Type", value: this.comProperty.transactionType},
      { label: "Status", value: this.comProperty.status },
      { label: "Facing", value: this.comProperty.facing },
      { label: "Price Breakup", value: `${this.comProperty.price} | ₹${this.comProperty.registrationCharges} Approx. Registration Charges` },
      { label: "Booking Amount", value: `₹${this.comProperty.bookingAmount}` },
      { label: "Address", value: fullAddress },
      { label: "Furnishing", value: this.selectedProperty.furnishedStatus },
      { label: "Age Of Construction", value: this.selectedProperty.ageOfConstruction },
      { label: "Water Availability", value: this.selectedProperty.waterAvailability },
      { label: "Status Of Electricity", value: this.selectedProperty.statusOfElectricity },
    ]
  }
  
    // console.log(JSON.stringify(this.propertyService.selectedProperty));
  });
  }

  showChatBox: boolean = false;
  showImagePopup: boolean = false;
  currentImageIndex: number = 0;

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
  acceptRequest(){
    console.log("sleectedProperty=>"+this.selectedProperty)
    alert("accepted");
    this.adminRequsetService.addProperty(this.selectedProperty).subscribe((data)=>{
      console.log("data added to admin request "+data);
    });
  }
  rejectRequest(){
    
    this.sellerService.addSellerRequestData(this.selectedProperty).subscribe((data)=>{
      console.log("data added to seller request "+data);
    });
    alert("Rejected");
    this.router.navigate(['/dashboard/property_manager/list_property_manager_request']);
    this.requsetService.deleteRequest(this.selectedProperty.id).subscribe((data)=>{
      console.log("deleted data ..."+data);
    });
  }
  // Go to previous image
  // prevImage() {
  //   this.currentImageIndex = (this.currentImageIndex - 1 + this.property.images.length) % this.property.images.length;
  // }

  // Go to next image
  // nextImage() {
  //   this.currentImageIndex = (this.currentImageIndex + 1) % this.property.images.length;
  // }

  // prevImage() {
  //   if (this.currentImageIndex > 0) {
  //     this.currentImageIndex--;
  //   }
  // }

  // nextImage() {
  //   if (this.currentImageIndex < this.property.images.length - 1) {
  //     this.currentImageIndex++;
  //   }
  // }

  openChat() {
    this.showChatBox = true;
  }

  closeChat() {
    this.showChatBox = false;
  }

}
