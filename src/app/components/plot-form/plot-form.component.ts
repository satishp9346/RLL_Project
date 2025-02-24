import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';

@Component({
  selector: 'app-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.css']
})
export class PlotFormComponent {
  plotForm!: FormGroup;

  isOpenListPropertyManagers: boolean = false;

  constructor(private fb: FormBuilder,private propertyManagerReqService: PropertyManagerRequestsService) {
    this.init
  }
  profileData: any = {};


  ngOnInit(): void {
    this.profileData = JSON.parse(sessionStorage.getItem('profile'));
    console.log('===>Seller profile data' + this.profileData);
   
    this.plotForm = this.fb.group({
      carpetArea: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Only numbers allowed
      status: ['', [Validators.required]],
      boundaryWalls:['', [Validators.required]],
      overlooking:['', [Validators.required]],
      facing: ['', [Validators.required,]],  // Only specific values allowed
      transactionType: ['', [Validators.required]],
      bookingAmount:['', [Validators.required]],
      price: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
      developer:['', [Validators.required]],
      registrationCharges:['', [Validators.required]],
      authorityApproval: ['', [Validators.required]],
      noOfOpenSides:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', [Validators.required]],
      floorsAllowed:['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Basic pattern for RERA number
      images: ['', [Validators.required]],
      door:['',[Validators.required]],
      street:['', Validators.required],
      city:['', Validators.required],
      district:['', Validators.required],
      state:['', Validators.required],
      country:['', Validators.required],
      pincode:['',[Validators.required,Validators.pattern('^[0-9]+$')]]

    });
  }

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
    if (this.plotForm.valid) {
      let formData=this.plotForm.value;
      
         
       console.log("===>"+formData)
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
            "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2024/12/02/Project-Photo-3-Global-City-VI-Hyderabad-5425065_900_1200_0_320.jpg",
            "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2024/12/02/Project-Photo-2-Global-City-VI-Hyderabad-5425065_1200_1600_0_320.jpg",
            "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2024/12/02/Project-Photo-1-Global-City-VI-Hyderabad-5425065_410_1440_0_320.jpg",
            "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2024/12/02/Project-Photo-4-Global-City-VI-Hyderabad-5425065_960_1280_0_320.jpg",
            "https://img.staticmb.com/mbimages/project/Photo_h0_w320/2024/12/02/Project-Photo-6-Global-City-VI-Hyderabad-5425065_777_1280_0_320.jpg"   
          ]
        },
        authorityApproval: formData.authorityApproval,
        boundaryWalls:formData.boundaryWalls,
        noOfOpenSides:formData.noOfOpenSides,
        floorsAllowed:formData.floorsAllowed,
        propertyManager: this.selectedPropertyManager,
        seller: this.profileData,
        buyer: {},
        propertyType: 'plots',
      };
      this.propertyManagerReqService
        .addProperty(propertyDetails)
        .subscribe((data) => {
          console.log('request property manager json===>' + data);
        });
        
      //       let address = new Address(
      //         plotData.door,
      //         plotData.street,
      //         plotData.city,
      //         plotData.district,
      //         plotData.pincode,
      //         plotData.state,
      //         plotData.country
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
      //         plotData.carpetArea,
      //         plotData.facing,
      //         plotData.price,
      //         plotData.description,
      //         plotData.status,
      //         plotData.registrationCharges,
      //         plotData.bookingAmount,
      //         plotData.transactionType,
      //         plotData.developer,
      //         plotData.overlooking,
      //         "", // soldStatus (you can update it as required)
      //         plotData.images,
      //         address
      //       );
      
      //       let seller = new Seller(userCommonDetails, user, propertyManager, commonPropertyDetails);
      
      //        let plot = new Plot(
      //         plotData.authorityApproval,
      //         plotData.floorsAllowed,
      //         plotData.noOfOpenSides,
      //         plotData.flooboundaryWallsrNo,
      //           seller
      //             );


      //  console.log(plotData);
      alert('Form Submitted');
     
      // Handle form submission logic here
    } else {
      console.log(this.plotForm.value)
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
    return this.plotForm.controls;
  }
}
