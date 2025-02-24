import { Component } from '@angular/core';
import { AdminRequestsServiceService } from 'src/app/services/admin_request_service/admin-requests-service.service';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-admin-request-property-card',
  templateUrl: './admin-request-property-card.component.html',
  styleUrls: ['./admin-request-property-card.component.css']
})
export class AdminRequestPropertyCardComponent {

  selectedProperty:any;
  comProperty:any;
  address:any;

  loopData:any[]=[];
  selectedPropertyCopy:any={};
  constructor(private requsetService:AdminRequestsServiceService,private propertyService:PropertyService){
    this.requsetService.getRequestProperty().subscribe((data)=>{
      this.selectedProperty=data;
      console.log(this.selectedProperty+"request property")
      this.selectedPropertyCopy = JSON.parse(JSON.stringify(this.selectedProperty));
    delete this.selectedPropertyCopy.propertyType;
    console.log(this.selectedPropertyCopy);
    this.comProperty=this.selectedProperty.commonPropertyDetails;
    this.address=this.selectedProperty.commonPropertyDetails.address;
    let fullAddress=`${this.address.doorNum}, ${this.address.street}, ${this.address.city}, ${this.address.district}, ${this.address.state}, ${this.address.country}, ${this.address.pinCode}`;
    this.loopData= [
      { label: "Carpet Area", value: this.comProperty.carpetArea },
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
    // console.log(JSON.stringify(this.requsetService.getRequest()));
  });
  }

  showChatBox: boolean = false;
  showImagePopup: boolean = false;
  currentImageIndex: number = 0;

  ngOnInit(){
    console.log(this.selectedProperty);
    
  }

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
  acceptRequest(){
    // if(this.selectedProperty.type==='apartments')
    if(this.selectedProperty.propertyType==='apartment'){
    let propertyData={
      "apartment": {
        "apartmentName": this.selectedProperty.apartmentName,
        "baths": this.selectedProperty.baths,
        "type": this.selectedProperty.type,
        "floorNo": this.selectedProperty.floorNo,
        "noOfLifts": this.selectedProperty.noOfLifts,
        "furnishedStatus": this.selectedProperty.furnishedStatus,
        "ageOfConstruction": this.selectedProperty.ageOfConstruction,
        "waterAvailability": this.selectedProperty.waterAvailability,
        "statusOfElectricity": this.selectedProperty.statusOfElectricity,
        "authorityApproval": this.selectedProperty.authorityApproval,
        "balconies": this.selectedProperty.balconies,
        "commonPropertyDetails": this.selectedProperty.commonPropertyDetails,
        "seller":this.selectedProperty.seller,
        "propertyManager": this.selectedProperty.propertyManager,
        "buyer": this.selectedProperty.buyer
      }
    }

    // this.propertyService.addApartmentData({"apartment":this.selectedProperty,"commonPropertyDetailsDTO.images":this.comProperty.images}).subscribe((data)=>{
    //   console.log("data added in table"+data)
    // })
    this.requsetService.addApartment(propertyData.apartment).subscribe((data)=>{
      console.log("data add successfully"+data);
    },(error)=>{console.log(error.message)});
  }
  if(this.selectedProperty.propertyType==='plots'){
    let propertyData={
      "plots": {
        "authorityApproval": this.selectedProperty.authorityApproval,
        "boundaryWalls":this.selectedProperty.boundaryWalls,
        "noOfOpenSides":this.selectedProperty.noOfOpenSides,
        "floorsAllowed":this.selectedProperty.floorsAllowed,
        "commonPropertyDetails": this.selectedProperty.commonPropertyDetails,
        "seller":this.selectedProperty.seller,
        "propertyManager": this.selectedProperty.propertyManager,
        "buyer": this.selectedProperty.buyer
      }
    }

    // this.propertyService.addApartmentData({"apartment":this.selectedProperty,"commonPropertyDetailsDTO.images":this.comProperty.images}).subscribe((data)=>{
    //   console.log("data added in table"+data)
    // })
    this.requsetService.addPlots(propertyData.plots).subscribe((data)=>{
      console.log("data add successfully"+data);
    },(error)=>{console.log(error.message)});
  }
  if(this.selectedProperty.propertyType==='villa'){
    let propertyData={
      "villa": {
        "baths": this.selectedProperty.baths,
        "type": this.selectedProperty.type,
        "furnishedStatus": this.selectedProperty.furnishedStatus,
        "ageOfConstruction": this.selectedProperty.ageOfConstruction,
        "waterAvailability": this.selectedProperty.waterAvailability,
        "statusOfElectricity": this.selectedProperty.statusOfElectricity,
        "balconies": this.selectedProperty.balconies,
        "commonPropertyDetails": this.selectedProperty.commonPropertyDetails,
        "seller":this.selectedProperty.seller,
        "propertyManager": this.selectedProperty.propertyManager,
        "buyer": this.selectedProperty.buyer
      }
    }

    // this.propertyService.addApartmentData({"apartment":this.selectedProperty,"commonPropertyDetailsDTO.images":this.comProperty.images}).subscribe((data)=>{
    //   console.log("data added in table"+data)
    // })
    this.requsetService.addVilla(propertyData.villa).subscribe((data)=>{
      console.log("data add successfully"+data);
    },(error)=>{console.log(error.message)});
  }

  }
  
  
  rejectRequest(){
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
