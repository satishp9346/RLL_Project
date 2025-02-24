import { Component } from '@angular/core';
import { BuyerRequestService } from 'src/app/services/buyer-service/buyer-request.service';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  selectedProperty:any;
  comProperty:any;
  address:any;

  selectedType:string;
  profileData:any;

  loopData:any[]=[];

  constructor(private propertyService:PropertyService,private buyerService:BuyerRequestService,private propertyManagerRequest:PropertyManagerRequestsService){
    
  }
  ngOnInit(){
    this.selectedType=localStorage.getItem("selectedType");
    console.log(this.selectedType);
    // this.profileData=sessionStorage.getItem("profile");
    const profile = sessionStorage.getItem('profile');
      if (profile) {
        this.profileData = JSON.parse(profile);
        console.log("===>"+this.profileData);
      }
    this.buyerService.getRequestData().subscribe((data)=>{
      this.selectedProperty=data;
      console.log(JSON.stringify(this.selectedProperty)+"==>");
    
    this.comProperty=this.selectedProperty.commPropDetails;
    this.address=this.selectedProperty.commPropDetails.address;
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
  disableBuy:boolean=false;
  buyProperty(){
    let propertyDetails = {
      id:this.selectedProperty.apartmentId,
      commonPropertyDetails: this.selectedProperty.commPropDetails,
      authorityApproval: this.selectedProperty.authorityApproval,
      type: this.selectedProperty.type,
      baths: this.selectedProperty.baths,
      furnishedStatus: this.selectedProperty.furnishedStatus,
      balconies: this.selectedProperty.balconies,
      apartmentName: this.selectedProperty.apartmentName,
      floorNo: this.selectedProperty.floorNo,
      noOfLifts: this.selectedProperty.noOfLifts,
      ageOfConstruction: this.selectedProperty.ageOfConstruction,
      waterAvailability: this.selectedProperty.waterAvailability,
      statusOfElectricity: this.selectedProperty.statusOfElectricity,
      propertyManager: this.selectedProperty.seller.property_manager,
      seller: this.selectedProperty.seller,
      buyer: this.profileData,
      propertyType: 'apartment',
    };
    console.log(propertyDetails);
    this.propertyManagerRequest.addBuyRequest(propertyDetails).subscribe((data)=>{
      console.log("data added to prp man req"+data);
      alert("request sent to property manager")
      this.disableBuy=true;
    })
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
