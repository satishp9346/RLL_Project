import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  selectedType: string = "";
  selectedProperty: any = {};
  propertyData = {
    "apartmentsListData": [
      {
        "commonPropertyDetails": {
          "price": "45.0 Lac",
          "facing": "North",
          "registrationCharges": "2,25,000",
          "bookingAmount": "2.0 Lac",
          "description": "Multistory apartment is available for sale. It has a carpet area of 507 sq-ft, and it is in a good location. Please contact for more details.\n\nProperty Specifications:\n\n- Spacious flat with a carpet area of 507 sq. ft.\n- Located on the 3rd floor of a 5-story building.\n- Semi-furnished with well-crafted wardrobes.\n- 1 bedroom, 2 bathrooms (one attached, one common).\n- Modern modular kitchen with dedicated utility area.\n- Vitrified flooring, south-facing, and Vastu compliant.\n\nFacilities:\n\n- Covered parking, 24-hour water supply, and power backup.\n- Security guard and one lift for easy access.\n\nLocality:\n\n- Schools, hospitals, malls within 2 km.\n- Public transport, railway, and metro 9-10 km away.\n- Nearby banks and ATMs available.",
          "developer": "Ashtavinayak Developers",
          "soldStatus":"unsold",
          "address": {
            "doorNum": "100-80",
            "street": "ramalayam",
            "city": "ongole",
            "district": "prakasam",
            "pinCode": "523001",
            "state": "AP",
            "country": "India"
          },
          "carpetArea": "507 sqft",
          "transactionType": "Resale",
          "overlooking": "In City Center",
          "status": "Ready to Move",
          "images": [
            "https://newprojects.99acres.com/projects/av_bhat_developers_llp/a_v_anandam/images/x7ammu0_1722507771_508332469_optOrig.jpg",
            "https://newprojects.99acres.com/projects/naiknavare_developers/naiknavare_eagles_nest/images/xidpomz_1714373386_488964160_optOrig.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957287O-1736483369547.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957293O-1736483369817.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957283O-1736483371668.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957317O-1736483349852.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957301O-1736483360460.jpg",
            "https://imagecdn.99acres.com/media1/26562/1/531241477O-1731712021116.jpg"
          ]
        },
        "authorityApproval":"",
        "type": "1 BHK",
        "baths": 2,
        "furnishedStatus": "Furnished",
        "balconies": 1,
        "apartmentName": "Shivam Complex",
        "floorNo": 3,
        "noOfLifts":3,
        "ageOfConstruction":3,
        "waterAvailability":"24/7",
        "statusOfElectricity":"24/7 or rare power cut"
      }
    ],
    "plotsData": [
      {
        "commonPropertyDetails": {
          "price": "45.0 Lac",
          "facing": "North",
          "registrationCharges": "2,25,000",
          "bookingAmount": "2.0 Lac",
          "description": "Multistory apartment is available for sale. It has a carpet area of 507 sq-ft, and it is in a good location. Please contact for more details.\n\nProperty Specifications:\n\n- Spacious flat with a carpet area of 507 sq. ft.\n- Located on the 3rd floor of a 5-story building.\n- Semi-furnished with well-crafted wardrobes.\n- 1 bedroom, 2 bathrooms (one attached, one common).\n- Modern modular kitchen with dedicated utility area.\n- Vitrified flooring, south-facing, and Vastu compliant.\n\nFacilities:\n\n- Covered parking, 24-hour water supply, and power backup.\n- Security guard and one lift for easy access.\n\nLocality:\n\n- Schools, hospitals, malls within 2 km.\n- Public transport, railway, and metro 9-10 km away.\n- Nearby banks and ATMs available.",
          "developer": "Ashtavinayak Developers",
          "address": {
            "doorNum": "100-80",
            "street": "ramalayam",
            "city": "ongole",
            "district": "prakasam",
            "pinCode": "523001",
            "state": "AP",
            "country": "India"
          },
          "carpetArea": "507 sqft",
          "transactionType": "Resale",
          "overlooking": "In City Center",
          "status": "Ready to Move",
          "soldStatus":"unsold",
          "images": [
            "https://newprojects.99acres.com/projects/av_bhat_developers_llp/a_v_anandam/images/x7ammu0_1722507771_508332469_optOrig.jpg",
            "https://newprojects.99acres.com/projects/naiknavare_developers/naiknavare_eagles_nest/images/xidpomz_1714373386_488964160_optOrig.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957287O-1736483369547.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957293O-1736483369817.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957283O-1736483371668.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957317O-1736483349852.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957301O-1736483360460.jpg",
            "https://imagecdn.99acres.com/media1/26562/1/531241477O-1731712021116.jpg"
          ]
        },
        "authorityApproval": "GHMC",
        "floorsAllowed": 3,
        "noOfOpenSides": 2,
        "boundaryWalls": 2,
      }
    ],
    "villasData": [
      {
        "seller":{
          "propertyManager":{}
        },
        "commonPropertyDetails": {
          "price": "45.0 Lac",
          "facing": "North",
          "registrationCharges": "2,25,000",
          "bookingAmount": "2.0 Lac",
          "description": "Multistory apartment is available for sale. It has a carpet area of 507 sq-ft, and it is in a good location. Please contact for more details.\n\nProperty Specifications:\n\n- Spacious flat with a carpet area of 507 sq. ft.\n- Located on the 3rd floor of a 5-story building.\n- Semi-furnished with well-crafted wardrobes.\n- 1 bedroom, 2 bathrooms (one attached, one common).\n- Modern modular kitchen with dedicated utility area.\n- Vitrified flooring, south-facing, and Vastu compliant.\n\nFacilities:\n\n- Covered parking, 24-hour water supply, and power backup.\n- Security guard and one lift for easy access.\n\nLocality:\n\n- Schools, hospitals, malls within 2 km.\n- Public transport, railway, and metro 9-10 km away.\n- Nearby banks and ATMs available.",
          "developer": "Ashtavinayak Developers",
          "address": {
            "doorNum": "100-80",
            "street": "ramalayam",
            "city": "ongole",
            "district": "prakasam",
            "pinCode": "523001",
            "state": "AP",
            "country": "India"
          },
          "carpetArea": "507 sqft",
          "transactionType": "Resale",
          "overlooking": "In City Center",
          "status": "Ready to Move",
          "soldStatus":"unsold",
          "images": [
            "https://newprojects.99acres.com/projects/av_bhat_developers_llp/a_v_anandam/images/x7ammu0_1722507771_508332469_optOrig.jpg",
            "https://newprojects.99acres.com/projects/naiknavare_developers/naiknavare_eagles_nest/images/xidpomz_1714373386_488964160_optOrig.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957287O-1736483369547.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957293O-1736483369817.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957283O-1736483371668.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957317O-1736483349852.jpg",
            "https://imagecdn.99acres.com/media1/27697/17/553957301O-1736483360460.jpg",
            "https://imagecdn.99acres.com/media1/26562/1/531241477O-1731712021116.jpg"
          ]
        },
        "type": "1 BHK",
        "baths": 10,
        "ageOfConstruction":"",
        "furnishedStatus": "Furnished",
        "balconies": 1,
        "waterAvailability":"24/7",
        "statusOfElectricity":"24/7 or rare power cut"
      }
    ]
  }

  constructor() { }

  setSelectedType(type: string): void {
    this.selectedType = type;
  }

  setSelectedProperty(obj: any): void {
    this.selectedProperty = obj;
  }
}
