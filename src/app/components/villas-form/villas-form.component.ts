import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-villas-form',
  templateUrl: './villas-form.component.html',
  styleUrls: ['./villas-form.component.css']
})
export class VillasFormComponent {
  villaForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {
    this.init
  }
 
  ngOnInit() {
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
      price: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      registrationCharges: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      bookingAmount: ['', Validators.required],
      transactionType:['',Validators.required],
      developer: ['', Validators.required],
      overlooking:['',Validators.required],
      images: ['', Validators.required],
   
      doorNum:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      street:['', Validators.required],
      city:['', Validators.required],
      district:['', Validators.required],
      state:['', Validators.required],
      country:['', Validators.required],
      pincode:['',[Validators.required,Validators.pattern('^[0-9]+$')]]
    });
  }
 
  onSubmit() {
    if (this.villaForm.valid) {
      let villaData= this.villaForm.value;


      console.log("===>"+villaData)
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
