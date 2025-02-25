import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerRequestService } from 'src/app/services/buyer-service/buyer-request.service';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-common-property-list',
  templateUrl: './common-property-list.component.html',
  styleUrls: ['./common-property-list.component.css']
})
export class CommonPropertyListComponent {
selectedType:string;
  profileData:any;

  propertyList:any[]=[
    {
      "commonPropertyDetails": {
        "price": 4354565,
        "facing": "north",
        "registrationCharges": 32243543,
        "bookingAmount": 45645675,
        "description": "fgdfgdfvkndjknvjdjkjd",
        "developer": "Chandu Developers",
        "soldStatus": "unsold",
        "address": {
          "doorNum": "1-23A",
          "street": "ramalayam street",
          "city": "Guntur",
          "district": "Amarvati",
          "pinCode": "523260",
          "state": "Ap",
          "country": "India"
        },
        "carpetArea": "1233423",
        "transactionType": "resale",
        "overlooking": "near to main road",
        "status": "ready",
        "images": [
          "https://www.wavecity.in/uploads/blogs/202302040620461.jpg",
          "https://media.tatarealty.in/posts/December2022/blog_5_2.jpg",
          "https://www.chennaiproperties.in/projectsgallery/6217/salepageimages/G_Square_Unicorn_1.jpeg",
          "https://s3.ap-south-1.amazonaws.com/www.cimg.in/images/2022/09/08/34/_16626388441_large.jpg",
          "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2024/12/02/Project-Photo-6-Global-City-VI-Hyderabad-5425065_777_1280_0_320.jpg"
        ]
      },
      "authorityApproval": "GHMC",
      "boundaryWalls": 2,
      "noOfOpenSides": 3,
      "floorsAllowed": 5,
      "propertyManager": {
        "propManagerid": 1,
        "ucd": {
          "userComId": 3,
          "firstName": "Pavan",
          "lastName": "Kumar",
          "gender": "male",
          "age": 22,
          "mobileNo": "8965656565",
          "address": {
            "addressId": 3,
            "doorNum": "100/70",
            "street": "sfdsdfd",
            "city": "Guntur",
            "district": "Dharwad",
            "pinCode": "5232601",
            "state": "Telangana",
            "country": "India"
          }
        },
        "user": {
          "userId": 3,
          "email": "pavan@gmail.com",
          "password": "pavan@123",
          "role": "PROPERTYMANAGER"
        }
      },
      "seller": {
        "user": {
          "userId": 2,
          "email": "raju@gmail.com",
          "password": "raju@123",
          "role": "SELLER"
        },
        "userCommonDetails": {
          "userComId": 2,
          "firstName": "Raju",
          "lastName": "Kumar",
          "gender": "male",
          "age": 22,
          "mobileNo": "9848032194",
          "address": {
            "addressId": 2,
            "doorNum": "100/70",
            "street": "ramalayam street",
            "city": "Guntur",
            "district": "Dharwad",
            "pinCode": "5232601",
            "state": "Tamil Nadu",
            "country": "India"
          }
        }
      },
      "buyer": {},
      "propertyType": "plots"
    },
    {
      "commonPropertyDetails": {
        "price": "2345678",
        "facing": "east",
        "registrationCharges": "12345",
        "bookingAmount": "100000",
        "description": "SADZFC GYUJHMNLJGURDT",
        "developer": "Shiva developers",
        "soldStatus": "unsold",
        "address": {
          "doorNum": "1-23A",
          "street": "ramalayam street",
          "city": "Guntur",
          "district": "Hyderbad",
          "pinCode": "523260",
          "state": "Ts",
          "country": "India"
        },
        "carpetArea": "2345",
        "transactionType": "new property",
        "overlooking": "near to main road",
        "status": "ready",
        "images": [
          "https://images.thesqua.re/property/20240716-13400340S_2",
          "https://images.thesqua.re/property/20241225-09064106S_12.jpg?tr=w-410,pr-true",
          "https://images.thesqua.re/property/20241218-13113911S_1-16.jpeg",
          "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74038308225138/QS1042/QS1042-Q1/1708945303655.jpeg",
          "https://images.thesqua.re/property/20241220-06592459S_1-5.jpeg?tr=w-410,pr-true",
          "https://newprojects.99acres.com/projects/av_bhat_developers_llp/a_v_anandam/images/x7ammu0_1722507771_508332469_optOrig.jpg"
        ]
      },
      "authorityApproval": "GHMC",
      "type": "1bhk",
      "baths": 2,
      "furnishedStatus": "furnished",
      "balconies": 1,
      "apartmentName": "Sri Shiva apartments",
      "floorNo": "2",
      "noOfLifts": 1,
      "ageOfConstruction": 2,
      "waterAvailability": "yes",
      "statusOfElectricity": "yes",
      "propertyManager": {
        "propManagerid": 2,
        "ucd": {
          "userComId": 4,
          "firstName": "Vaishnavi",
          "lastName": "Gottipati",
          "gender": "female",
          "age": 22,
          "mobileNo": "9848032145",
          "address": {
            "addressId": 4,
            "doorNum": "100/70",
            "street": "ramalayam street",
            "city": "Guntur",
            "district": "Dharwad",
            "pinCode": "5232601",
            "state": "Karnataka",
            "country": "India"
          }
        },
        "user": {
          "userId": 4,
          "email": "vaishu@gmail.com",
          "password": "vaishu@123",
          "role": "PROPERTYMANAGER"
        }
      },
      "seller": {
        "user": {
          "userId": 2,
          "email": "raju@gmail.com",
          "password": "raju@123",
          "role": "SELLER"
        },
        "userCommonDetails": {
          "userComId": 2,
          "firstName": "Raju",
          "lastName": "Kumar",
          "gender": "male",
          "age": 22,
          "mobileNo": "9848032191",
          "address": {
            "addressId": 2,
            "doorNum": "100/70",
            "street": "ramalayam street",
            "city": "Guntur",
            "district": "Dharwad",
            "pinCode": "5232601",
            "state": "Tamil Nadu",
            "country": "India"
          }
        }
      },
      "buyer": {},
      "propertyType": "apartment"
    },
    {
      "commonPropertyDetails": {
        "price": "2345678",
        "facing": "east",
        "registrationCharges": "12345",
        "bookingAmount": "100000",
        "description": "SADZFC GYUJHMNLJGURDT",
        "developer": "Shiva developers",
        "soldStatus": "unsold",
        "address": {
          "doorNum": "1-23A",
          "street": "ramalayam street",
          "city": "Guntur",
          "district": "Hyderbad",
          "pinCode": "523260",
          "state": "Ts",
          "country": "India"
        },
        "carpetArea": "2345",
        "transactionType": "new property",
        "overlooking": "near to main road",
        "status": "ready",
        "images": [
          "https://images.thesqua.re/property/20240716-13400340S_2",
          "https://images.thesqua.re/property/20241225-09064106S_12.jpg?tr=w-410,pr-true",
          "https://images.thesqua.re/property/20241218-13113911S_1-16.jpeg",
          "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH74038308225138/QS1042/QS1042-Q1/1708945303655.jpeg",
          "https://images.thesqua.re/property/20241220-06592459S_1-5.jpeg?tr=w-410,pr-true",
          "https://newprojects.99acres.com/projects/av_bhat_developers_llp/a_v_anandam/images/x7ammu0_1722507771_508332469_optOrig.jpg"
        ]
      },
      "authorityApproval": "GHMC",
      "type": "1bhk",
      "baths": 2,
      "furnishedStatus": "furnished",
      "balconies": 1,
      "apartmentName": "Sri Shiva apartments",
      "floorNo": "2",
      "noOfLifts": 1,
      "ageOfConstruction": 2,
      "waterAvailability": "yes",
      "statusOfElectricity": "yes",
      "propertyManager": {
        "propManagerid": 2,
        "ucd": {
          "userComId": 4,
          "firstName": "Vaishnavi",
          "lastName": "Gottipati",
          "gender": "female",
          "age": 22,
          "mobileNo": "9848032145",
          "address": {
            "addressId": 4,
            "doorNum": "100/70",
            "street": "ramalayam street",
            "city": "Guntur",
            "district": "Dharwad",
            "pinCode": "5232601",
            "state": "Karnataka",
            "country": "India"
          }
        },
        "user": {
          "userId": 4,
          "email": "vaishu@gmail.com",
          "password": "vaishu@123",
          "role": "PROPERTYMANAGER"
        }
      },
      "seller": {
        "user": {
          "userId": 2,
          "email": "raju@gmail.com",
          "password": "raju@123",
          "role": "SELLER"
        },
        "userCommonDetails": {
          "userComId": 2,
          "firstName": "Raju",
          "lastName": "Kumar",
          "gender": "male",
          "age": 22,
          "mobileNo": "9848032191",
          "address": {
            "addressId": 2,
            "doorNum": "100/70",
            "street": "ramalayam street",
            "city": "Guntur",
            "district": "Dharwad",
            "pinCode": "5232601",
            "state": "Tamil Nadu",
            "country": "India"
          }
        }
      },
      "buyer": {},
      "propertyType": "apartment"
    }
  ]

  constructor(private router:Router){
    
  }
  viewMore(property:any):void{
    localStorage.setItem("selectedComProperty",JSON.stringify(property));
    this.router.navigate(['/dashboard/common_property_card']);
  }
  

}
