import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ApartmentForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  documents: File | null;
}

@Component({
  selector: 'app-apartment-form',
  templateUrl: './apartment-form.component.html',
  styleUrls: ['./apartment-form.component.css']
})
export class ApartmentFormComponent {
  apartmentForm!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Initialize the reactive form
    this.apartmentForm = this.fb.group({
      apartmentName: ['', Validators.required],
      type: ['', Validators.required],
      developer: ['', Validators.required],
      carpetArea: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Only numbers
      floorNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],//only amount
      status: ['', Validators.required],
      facing: ['', Validators.required,],
      furnishedStatus: ['', Validators.required],
      baths: ['', Validators.required],
      noOfLifts: ['', Validators.required],
      waterAvailability: ['', Validators.required],
      statusOfElectricity: ['', Validators.required],
      authorityApproval: ['', Validators.required],
      ageOfConstruction: ['', Validators.required],
      balconies: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Only numbers
      transactionType: ['', Validators.required],
      registrationCharges: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      bookingAmount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', Validators.required],
      overlooking: ['', Validators.required],
      images: ['', Validators.required],
      door: ['', [Validators.required]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]

    });
  }

  propertyManagger:any;
  
  setPropertyManager(){
    this.propertyManagger= {
      "propManagerid": 1,
      "ucd": {
        "userComId": 1,
        "firstName": "raju",
        "lastName": "kumar",
        "gender": "male",
        "age": 22,
        "mobileNo": "9848034521",
        "address": {
          "addressId": 1,
          "doorNum": "4-100",
          "street": "ramalayma",
          "city": "Vizag",
          "district": "Vizag",
          "pinCode": "543200",
          "state": "AP",
          "country": "India"
        }
      },
      "user": {
        "userId": 1,
        "email": "raju@gmail.com",
        "password": "raju@123",
        "role": "PROPERTYMANAGER"
      }
    }
  }

  onSubmit() {
    if (this.apartmentForm.valid) {
      let formData = this.apartmentForm.value;
      localStorage.setItem("property",JSON.stringify({
          propertyType:"apartment",
          propertyData:formData,
          propertyManagger:this.propertyManagger
      }));
      console.log("===>"+JSON.stringify(formData));
      // let address = new Address(
      //   formData.door,
      //   formData.street,
      //   formData.city,
      //   formData.district,
      //   formData.pincode,
      //   formData.state,
      //   formData.country
      // );

      // let userCommonDetails = new UserCommonDetails(
      //   "", // firstName
      //   "", // lastName
      //   "", // gender
      //   0,  // age
      //   "", // mobileNo
      //   address
      // );

      // let user = new User("", "", ""); // You can fill in actual values for user

      // let propertyManager = new PropertyManager(userCommonDetails, user);

      // let commonPropertyDetails = new CommonPropertyDetails(
      //   formData.carpetArea,
      //   formData.facing,
      //   formData.price,
      //   formData.description,
      //   formData.status,
      //   formData.registrationCharges,
      //   formData.bookingAmount,
      //   formData.transactionType,
      //   formData.developer,
      //   formData.overlooking,
      //   "", // soldStatus (you can update it as required)
      //   formData.images,
      //   address
      // );

      // let seller = new Seller(userCommonDetails, user, propertyManager, commonPropertyDetails);

      // let apartment = new Apartment(
      //   formData.apartmentName,
      //   formData.baths,
      //   formData.type,
      //   formData.floorNo,
      //   formData.noOfLifts,
      //   formData.furnishedStatus,
      //   formData.ageOfConstruction,
      //   formData.waterAvailability,
      //   formData.statusOfElectricity,
      //   formData.authorityApproval,
      //   formData.balconies,
      //   seller
      // );


      // console.log(apartment);

      alert('Form Submitted');


    } else {
      console.log(this.apartmentForm.value)
      alert('Form is invalid');
    }
  }



   init() {
    
    const input: HTMLInputElement = document.getElementById('imageInput') as HTMLInputElement;

    input.addEventListener('change', (event: Event) => {
      const files: FileList = (event.target as HTMLInputElement).files as FileList;
    
      for (let i: number = 0; i < files.length; i++) {
        console.log(`File ${i}: ${files[i].name}`);
      }
    });
  }

  get formControls() {
    return this.apartmentForm.controls;
  }
}
