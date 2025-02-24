import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';

@Component({
  selector: 'app-villas-form',
  templateUrl: './villas-form.component.html',
  styleUrls: ['./villas-form.component.css']
})
export class VillasFormComponent {
  villaForm!: FormGroup;
  isOpenListPropertyManagers: boolean = false;
  constructor(private fb: FormBuilder,private propertyManagerReqService: PropertyManagerRequestsService) {
    this.init
  }
  profileData: any = {};

 
  ngOnInit() {
    this.profileData = JSON.parse(sessionStorage.getItem('profile'));
    console.log('===>Seller profile data' + this.profileData);
   
    // Initialize the reactive form
    this.villaForm = this.fb.group({
      type: ['', Validators.required],
      baths:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      ageOfConstruction:['',[Validators.required , Validators.pattern('^[0-9]+$')]],
      waterAvailability:['',Validators.required],
      statusOfElectricity:['',Validators.required],
      furnishedStatus: ['', Validators.required],
      balconies:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      carpetArea: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      facing: ['', Validators.required],
      price: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
      description: ['', Validators.required],
      status: ['', Validators.required],
      registrationCharges: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      bookingAmount: ['', Validators.required],
      transactionType:['',Validators.required],
      developer: ['', Validators.required],
      overlooking:['',Validators.required],
      images: ['', Validators.required],
   
      doorNum:['',[Validators.required]],
      street:['', Validators.required],
      city:['', Validators.required],
      district:['', Validators.required],
      state:['', Validators.required],
      country:['', Validators.required],
      pincode:['',[Validators.required,Validators.pattern('^[0-9]+$')]]
    });
  }

  propertyManagger: any;
  selectedPropertyManager: any;
  closePopup(): void {
    this.isOpenListPropertyManagers = false;
  }

  onPropertyManagerSelected(propManager: any): void {
    this.selectedPropertyManager = propManager;
    console.log('Selected Property Manager:', this.selectedPropertyManager);
    this.closePopup();
  }
  setPropertyManager() {
    this.isOpenListPropertyManagers = true;
  }
  uplodedImages: any[] = [];
  selectedFiles: File[] = [];
  retrievedImages: any[] = [];
  onImageSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
    console.log(this.selectedFiles);
  }
 
  onSubmit() {
    if (this.villaForm.valid) {
      let formData = this.villaForm.value;
      let propertyDetails = {
        commonPropertyDetails: {
          price: formData.price,
          facing: formData.facing,
          registrationCharges: formData.registrationCharges,
          bookingAmount: formData.bookingAmount,
          description: formData.description,
          developer: formData.developer,
          soldStatus: 'unsold',
          address: {
            doorNum: formData.door,
            street: formData.street,
            city: formData.city,
            district: formData.district,
            pinCode: formData.pincode,
            state: formData.state,
            country: formData.country,
          },
          carpetArea: formData.carpetArea,
          transactionType: formData.transactionType,
          overlooking: formData.overlooking,
          status: formData.status,
          images: [
            "https://imagecdn.99acres.com/media1/26887/18/537758635O-1734155353596.jpg",
            "https://imagecdn.99acres.com/media1/26888/0/537760377O-1734155720973.jpg",
            "https://imagecdn.99acres.com/media1/26888/0/537760647O-1734155828737.jpg",
            "https://imagecdn.99acres.com/media1/26887/18/537758953O-1734155416616.jpg",
            "https://imagecdn.99acres.com/media1/26888/0/537760897O-1734155886962.jpg",
            "https://imagecdn.99acres.com/media1/26888/1/537761057O-1734155954271.jpg",
          ]
        },
        type: formData.type,
        baths: formData.baths,
        furnishedStatus: formData.furnishedStatus,
        balconies: formData.balconies,        
        ageOfConstruction: formData.ageOfConstruction,
        waterAvailability: formData.waterAvailability,
        statusOfElectricity: formData.statusOfElectricity,
        propertyManager: this.selectedPropertyManager,
        seller: this.profileData,
        buyer: {},
        propertyType: 'villa',
      };
      this.propertyManagerReqService
        .addProperty(propertyDetails)
        .subscribe((data) => {
          console.log('request property manager json===>' + data);
        });
      


      console.log("===>"+formData)
      //       let address = new Address(
      //         villaData.door,
      //         villaData.street,
      //         villaData.city,
      //         villaData.district,
      //         villaData.pincode,
      //         villaData.state,
      //         villaData.country
      //       );
      
      //       let userCommonDetails = new UserCommonDetails(
      //         "", // firstName
      //         "", // lastName
      //         "", // gender
      //         0,  // age
      //         "", // mobileNo
      //         address
      //       );
      
      //       let user = new User("", "", ""); // You can fill in actual values for user
      
      //       let propertyManager = new PropertyManager(userCommonDetails, user);
      
      //       let commonPropertyDetails = new CommonPropertyDetails(
      //         villaData.carpetArea,
      //         villaData.facing,
      //         villaData.price,
      //         villaData.description,
      //         villaData.status,
      //         villaData.registrationCharges,
      //         villaData.bookingAmount,
      //         villaData.transactionType,
      //         villaData.developer,
      //         villaData.overlooking,
      //         "", // soldStatus (you can update it as required)
      //         villaData.images,
      //         address
      //       );
      
      //       let seller = new Seller(userCommonDetails, user, propertyManager, commonPropertyDetails);
      //       let villas = new Villas(
      //         villaData.baths,
      //         villaData.type,
      //         villaData.furnishedStatus,
      //         villaData.ageOfConstruction,
      //         villaData.waterAvailability,
      //         villaData.statusOfElectricity,
      //         villaData.balconies,
      //         seller
      //       );
      //  console.log(villaData)

      alert('Form Submitted');
    } else {
      console.log(this.villaForm.value)
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
    return this.villaForm.controls;
  }
 
}
