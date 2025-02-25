import { Component } from '@angular/core';

@Component({
  selector: 'app-common-property-card',
  templateUrl: './common-property-card.component.html',
  styleUrls: ['./common-property-card.component.css']
})
export class CommonPropertyCardComponent {

  selectedProperty:any;
  comProperty:any;
  address:any;

  selectedType:string;
  profileData:any;

  loopData:any[]=[];

  constructor(){
    
  }
  ngOnInit(){
    this.selectedProperty=JSON.parse(localStorage.getItem("selectedComProperty"));
    this.selectedType=this.selectedProperty.propertyType;
    console.log(this.selectedType);
    this.comProperty=this.selectedProperty.commonPropertyDetails;
    this.address=this.selectedProperty.commonPropertyDetails.address;
    let fullAddress=`${this.address.doorNum}, ${this.address.street}, ${this.address.city}, ${this.address.district}, ${this.address.state}, ${this.address.country}, ${this.address.pinCode}`;
   
    if(this.selectedType=='apartment'){
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
  
  }

  showImagePopup: boolean = false;
  currentImageIndex: number = 0;

  openImagePopup() {
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
  

}
