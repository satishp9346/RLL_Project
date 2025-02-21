import { Component } from '@angular/core';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {

  selectedProperty:any;
  
  loopData:any[]=[];

  constructor(private propertyService:PropertyService){
    this.selectedProperty=this.propertyService.selectedProperty;
    let address=this.selectedProperty.address;
    let fullAddress=`${address.doorNum}, ${address.street}, ${address.city}, ${address.district}, ${address.state}, ${address.country}, ${address.pinCode}`;
    this.loopData= [
      { label: "Carpet Area", value: this.selectedProperty.carpetArea },
      { label: "Developer", value: this.selectedProperty.developer },
      { label: "Apartment Name", value: this.selectedProperty.apartmentName },
      { label: "Floor", value: `${this.selectedProperty.floor} Floor`},
      { label: "Transaction Type", value: this.selectedProperty.transactionType},
      { label: "Status", value: this.selectedProperty.status },
      { label: "Facing", value: this.selectedProperty.facing },
      { label: "Price Breakup", value: `${this.selectedProperty.price} | ₹${this.selectedProperty.registrationCharges} Approx. Registration Charges` },
      { label: "Booking Amount", value: `₹${this.selectedProperty.bookingAmount}` },
      { label: "Address", value: fullAddress },
      { label: "Furnishing", value: this.selectedProperty.furnishing }
    ]
    console.log(JSON.stringify(this.propertyService.selectedProperty));
  }

  property = {
    price: "65.0 Lac",
    title: "2 BHK Flat For Sale in Hadapsar, Pune",
    bhk: 2,
    baths: 2,
    balconies:3,
    furnishing: "Furnished",
    facing:"South",
    images: [
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74166254298036/QS1042/QS1042-Q1/IMG_20230406_183718.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74166254298036/QS1042/QS1042-Q1/IMG_20230406_183718.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74166254298036/QS1042/QS1042-Q1/IMG_20230406_183718.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74166254298036/QS1042/QS1042-Q1/IMG_20230406_183718.jpg"
    ],
    details: [
      { label: "Carpet Area", value: "740 sqft" },
      { label: "Developer", value: "Subhash Builders" },
      { label: "Apartment Name", value: "Vardhaman Township" },
      { label: "Floor", value: "4th Floor" },
      { label: "Transaction Type", value: "Resale" },
      { label: "Status", value: "Ready to Move" },
      { label: "Facing", value: "South" },
    ]
  };

  propertyDetails = [
    { label: "Price Breakup", value: "₹65 Lac | ₹3,90,000 Approx. Registration Charges" },
    { label: "Booking Amount", value: "₹1.0 Lac" },
    { label: "Address", value: "Flat No 421 Floor No 4 B8 building Vardhman Township Sasane Nagar Hadapsar Pune., Hadapsar, Pune - East, Maharashtra" },
    { label: "Furnishing", value: "Unfurnished" },
    {
      label: "Description",
      value: `Discover a comfortable living experience with this 2 BHK flat for sale in Subhash Builders Vardhaman Township, Hadapsar, Pune. 
              Situated in a well-developed area, this property offers modern amenities and excellent connectivity to essential facilities. 
              Perfect for families seeking convenience and quality living.
              
              Property Specifications:
              - Spacious flat with a carpet area of 740 sq. ft.
              - Located on the 4th floor of a 5-story building.
              - Semi-furnished with well-crafted wardrobes.
              - 2 bedrooms, 2 bathrooms (one attached, one common).
              - Modern modular kitchen with dedicated utility area.
              - Vitrified flooring, west-facing, and Vastu compliant.
              
              Facilities:
              - Covered parking, 24-hour water supply, and power backup.
              - Security guard and one lift for easy access.
              
              Locality:
              - Schools, hospitals, malls within 2 km.
              - Public transport, railway, and metro 9-10 km away.
              - Nearby banks and ATMs available.`
    }
  ];

  details=this.propertyDetails.filter((data)=>data.label!=="Description");

  getDescription() {
    const descriptionDetail = this.propertyDetails.find(detail => detail.label === "Description");
    return descriptionDetail ? descriptionDetail.value : '';
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
