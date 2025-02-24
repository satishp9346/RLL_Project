import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageUploadService } from 'src/app/services/image-upload/image-upload.service';
import { PropertyManagerRequestsService } from 'src/app/services/property_manager_request_service/property-manger-requests-service.service';
import { PropertyService } from 'src/app/services/property_service/property.service';

@Component({
  selector: 'app-apartment-form',
  templateUrl: './apartment-form.component.html',
  styleUrls: ['./apartment-form.component.css'],
})
export class ApartmentFormComponent {
  apartmentForm!: FormGroup;

  isOpenListPropertyManagers: boolean = false;

  constructor(
    private fb: FormBuilder,
    private propertyManagerReqService: PropertyManagerRequestsService,
    private imageUploadService: ImageUploadService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  profileData: any = {};

  ngOnInit() {
    // Initialize the reactive form
    this.profileData = JSON.parse(sessionStorage.getItem('profile'));
    console.log('===>Seller profile data' + this.profileData);
    this.apartmentForm = this.fb.group({
      apartmentName: ['', Validators.required],
      type: ['', Validators.required],
      developer: ['', Validators.required],
      carpetArea: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Only numbers
      floorNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price: ['', [Validators.required]], //only amount
      status: ['', Validators.required],
      facing: ['', Validators.required],
      furnishedStatus: ['', Validators.required],
      baths: ['', Validators.required],
      noOfLifts: ['', Validators.required],
      waterAvailability: ['', Validators.required],
      statusOfElectricity: ['', Validators.required],
      authorityApproval: ['', Validators.required],
      ageOfConstruction: ['', Validators.required],
      balconies: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Only numbers
      transactionType: ['', Validators.required],
      registrationCharges: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      bookingAmount: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      description: ['', Validators.required],
      overlooking: ['', Validators.required],
      images: [null, Validators.required],
      door: ['', [Validators.required]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
    // this.propertyManagerReqService.clearRequests();
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
    // this.uploadImages();
    // const files: FileList = event.target.files;
    // const formData = new FormData();

    // Array.from(files).forEach((file) => {
    //   formData.append('images', file); // Append files to FormData
    // });

    // this.imageUploadService.uploadImages(formData).subscribe(
    //   (response: any) => {
    //     console.log('Images uploaded successfully:', response);
    //     this.uplodedImages = response.imageUrls;
    //     // Ensure images are set before allowing form submission
    //     if (this.uplodedImages.length > 0) {
    //       console.log('Images ready for form submission');
    //     }
    //   },
    //   (error) => {
    //     console.error('Image upload failed:', error);
    //   }
    // );
  // }
  // uploadImages(): void {
  //   if (this.selectedFiles.length === 0) {
  //     alert("Please select at least one image!");
  //     return;
  //   }

  //   const formData = new FormData();
  //   this.selectedFiles.forEach(file => {
  //     formData.append('images', file);
  //   });

  //   this.http.post('http://localhost:9091/api/tempImages/upload', formData, { responseType: "json" }).subscribe(response => {
  //     console.log("Images uploaded successfully", response);
  //   }, error => {
  //     console.error("Error uploading images", error);
  //   });
  // }

  // uploadImages(): void {
  //   if (this.selectedFiles.length === 0) {
  //       alert("Please select at least one image!");
  //       return;
  //   }

  //   const formData = new FormData();
  //   this.selectedFiles.forEach(file => {
  //       formData.append('images', file);
  //   });

  //   this.http.post('http://localhost:9091/api/tempImages/upload', formData, { responseType: "json" }).subscribe(
  //       response => {
  //           console.log("Images uploaded successfully", response);
  //           alert("Images uploaded successfully");
  //       },
  //       // error => {
  //       //     console.error("Error uploading images", error);
  //       //     alert(`Failed to upload images: ${error.error}`);
  //       // }
  //   );
  // }

//   uploadImages(): void {
//     if (this.selectedFiles.length === 0) {
//         alert("Please select at least one image!");
//         return;
//     }

//     const formData = new FormData();
//     this.selectedFiles.forEach(file => {
//         formData.append('images', file);
//     });

//     this.http.post('http://localhost:9091/api/tempImages/upload', formData, { responseType: "json" }).subscribe(
//         response => {
//             console.log("Images uploaded successfully", response);
//             alert("Images uploaded successfully");
//         },
//         error => {
//             console.error("Error uploading images", error);
//             alert(`Failed to upload images: ${error.error}`);
//         }
//     );
// }


  // retrieveImages(): void {
  //   this.http.get('http://localhost:9091/api/tempImages/all', { responseType: 'json' }).subscribe(response => {
  //     const imagesArray = response as any[];
  //     this.retrievedImages = imagesArray.map(image => {
  //       const blob = new Blob([image.imgList[0]], { type: 'image/jpeg' });
  //       return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  //     });
  //   }, error => {
  //     console.error("Error retrieving images", error);
  //   });
  // }
//   retrieveImages(): void {
//     this.http.get('http://localhost:9091/api/tempImages/all', { responseType: 'json' }).subscribe(
//         response => {
//             const imagesArray = response as any[];
//             this.retrievedImages = imagesArray.map(image => {
//                 const byteArray = new Uint8Array(image.imgData);
//                 const blob = new Blob([byteArray], { type: 'image/jpeg' });
//                 return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
//             });
//         },
//         error => {
//             console.error("Error retrieving images", error);
//         }
//     );
// }
// retrieveImages(): void {
//   this.http.get('http://localhost:9091/api/tempImages/all', { responseType: 'json' }).subscribe(
//       response => {
//           const imagesArray = response as any[];
//           this.retrievedImages = imagesArray.map(image => {
//               const byteArray = new Uint8Array(image.imgData);
//               const blob = new Blob([byteArray], { type: 'image/jpeg' });
//               return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
//           });
//       },
//       error => {
//           console.error("Error retrieving images", error);
//       }
//   );
// }

  onSubmit() {
    if (this.apartmentForm.valid) {
      // this.retrieveImages();
      // console.log("retived images data"+this.retrievedImages)
      let formData = this.apartmentForm.value;
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
        authorityApproval: formData.authorityApproval,
        type: formData.type,
        baths: formData.baths,
        furnishedStatus: formData.furnishedStatus,
        balconies: formData.balconies,
        apartmentName: formData.apartmentName,
        floorNo: formData.floorNo,
        noOfLifts: formData.noOfLifts,
        ageOfConstruction: formData.ageOfConstruction,
        waterAvailability: formData.waterAvailability,
        statusOfElectricity: formData.statusOfElectricity,
        propertyManager: this.selectedPropertyManager,
        seller: this.profileData,
        buyer: {},
        propertyType: 'apartment',
      };
      this.propertyManagerReqService
        .addProperty(propertyDetails)
        .subscribe((data) => {
          console.log('request property manager json===>' + data);
        });
      // localStorage.setItem("property",JSON.stringify({
      //     propertyType:"apartment",
      //     propertyData:propertyDetails,
      //     propertyManagger:this.selectedPropertyManager
      // }));

      // this.propertyManagerReqService.addRequest(propertyDetails);
      // console.log("===>request added data"+this.propertyManagerReqService.getRequests());
      console.log('form data===>' + JSON.stringify(formData));
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
      console.log(this.apartmentForm.value);
      alert('Form is invalid');
    }
  }

  init() {
    const input: HTMLInputElement = document.getElementById(
      'imageInput'
    ) as HTMLInputElement;

    input.addEventListener('change', (event: Event) => {
      const files: FileList = (event.target as HTMLInputElement)
        .files as FileList;

      for (let i: number = 0; i < files.length; i++) {
        console.log(`File ${i}: ${files[i].name}`);
      }
    });
  }

  get formControls() {
    return this.apartmentForm.controls;
  }
}
