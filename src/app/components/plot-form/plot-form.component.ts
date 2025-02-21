import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.css']
})
export class PlotFormComponent {
  plotForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.init
  }

  ngOnInit(): void {
    this.plotForm = this.fb.group({
      carpetArea: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Only numbers allowed
      status: ['', [Validators.required]],
      boundaryWalls:['', [Validators.required]],
      overlooking:['', [Validators.required]],
      facing: ['', [Validators.required,]],  // Only specific values allowed
      transactionType: ['', [Validators.required]],
      bookingAmount:['', [Validators.required]],
      price: ['', [Validators.required]],
      developer:['', [Validators.required]],
      registrationCharges:['', [Validators.required]],
      authorityApproval: ['', [Validators.required]],
      noOfOpenSides:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', [Validators.required]],
      floorsAllowed:['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Basic pattern for RERA number
      images: ['', [Validators.required]],
      door:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      street:['', Validators.required],
      village:['', Validators.required],
      district:['', Validators.required],
      state:['', Validators.required],
      country:['', Validators.required],
      pincode:['',[Validators.required,Validators.pattern('^[0-9]+$')]]

    });
  }

  onSubmit() {
    if (this.plotForm.valid) {
      let plotData=this.plotForm.value;
         
       console.log("===>"+plotData)
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
