import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login_service/login-service.service';
import { Address } from 'src/app/utils/Address';
import { User } from 'src/app/utils/User';
import { userCommonDetails } from 'src/app/utils/UserCommonDetails';
import { UserResponse } from 'src/app/utils/UserResponse';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profile: any;
 
  resetToDefault() {
    // Reset logic here
  }
  constructor(private fb:FormBuilder,private loginService:LoginServiceService,private router:Router){}
  

  profileForm:FormGroup;
  hidePassword = true;
  hideReEnterPassword = true;
  errorMessage: string = "";
  loading = false;
  ngOnInit(): void { 
    console.log("Profile data in ProfileComponent: ", this.profile);
    let userComDet=this.profile.userCommonDetails;
    this.profileForm = this.fb.group({ 
      userId:[this.profile.user.userId],
      userType: [this.profile.user.role, Validators.required], 
      firstName: [userComDet.firstName, [Validators.required, Validators.minLength(2)]], 
      lastName: [userComDet.lastName, [Validators.required, Validators.minLength(2)]], 
      email: [this.profile.user.email, [Validators.required, Validators.email]], 
      gender: [userComDet.gender, Validators.required],
      age:[userComDet.age,[Validators.required]], 
      phoneNumber: [userComDet.mobileNo, [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
      password: [this.profile.user.password, [Validators.required, Validators.minLength(6)]],
      doorNo: [userComDet.address.doorNo, Validators.required], 
      street: [userComDet.address.street, Validators.required], 
      city: [userComDet.address.city, Validators.required], 
      district: [userComDet.address.district, Validators.required], 
      state: [userComDet.address.state, Validators.required], 
      country: [userComDet.address.country, Validators.required],
      pinCode: [userComDet.address.pinCode, Validators.required] 
    }); 
  }
  get f() {
    return this.profileForm.controls;
  }
  getErrorMessage(control: string): string {
    const formControl = this.f[control];
    if (!formControl) {
      return '';
    }
    if (formControl.hasError('required')) {
      return `${control} is required`;
    } else if (formControl.hasError('email')) {
      return `Invalid email address`;
    } else if (formControl.hasError('minlength')) {
      const minLength = formControl.errors['minlength'].requiredLength;
      return `${control} must be at least ${minLength} characters long`;
    } else if (formControl.hasError('pattern')) {
      return `Invalid ${control}`;
    } else if (control === 'reEnterPassword' && this.profileForm.get('password')?.value !== this.profileForm.get('reEnterPassword')?.value) {
      console.log("sdhsgjhhj");
      return `Passwords do not match`;
    }
    return '';
  }
  getLocationOptions(location: string): string[] {
    switch (location) {
      case 'district':
        return ['Amarvati', 'Dharwad', 'Hyderabad', 'Chennai', 'Pune', 'Shimala'];
      case 'state':
        return ['Andhra Pradesh', 'Karnataka', 'Telangana', 'Tamil Nadu', 'Maharashtra', 'Himachal Pradesh'];
      case 'country':
        return ['India'];
      default:
        return [];
    }
  }
  onSubmit(): void {
      if (this.profileForm.invalid) {
        return;
      }
  
      // this.loading = true;
      setTimeout(() => {
        console.log("formDtaa==>"+JSON.stringify(this.profileForm.value));
        if (this.profileForm.valid) {
          const temp = this.profileForm.value;
          let userComDet=this.profile.userCommonDetails;
          //  let userResponse=new UserResponse(new User(temp.email,temp.password,temp.userType.toUpperCase()),
          //   new userCommonDetails(temp.firstName,temp.lastName,temp.gender,temp.age,temp.phoneNumber,
          //     new Address(temp.doorNo,temp.street,temp.city,temp.district,temp.state,temp.pinCode,temp.country)
          //   ));
          const jsonStruture={
            "user": {
              "userId": this.profile.user.userId,
              "email": temp.email,
              "password": temp.password,
              "role": this.profile.user.role
            },
            "userCommonDetails": {
              "userComId": userComDet.userComId,
              "firstName": temp.firstName,
              "lastName": temp.lastName,
              "gender": temp.gender,
              "age": temp.age,
              "mobileNo": temp.phoneNumber,
              "address": {
                "addressId": userComDet.address.addressId,
                "doorNum": temp.doorNo,
                "street": temp.street,
                "city": temp.city,
                "district": temp.district,
                "pinCode": temp.pinCode,
                "state": temp.state,
                "country": temp.country
              }
            }
          }          
          sessionStorage.setItem("profile",JSON.stringify(jsonStruture))
            // console.log("===>"+JSON.stringify());
          this.loginService.updateUser(jsonStruture).subscribe((user) => {
            if (user != null){
              this.errorMessage = "";
              alert('Form Updated successfully!');
            }
          }, (err: HttpErrorResponse) => {
            if (err.status === 404) {
              this.errorMessage = err.error;
            }
          });
        }
        else {
          this.errorMessage = "Fields should not empty"
        }
        
        
  
        this.loading = false;
      }, 2000);
      // const formData = this.profileForm.value;
      // console.log(formData);
  
      // // Mock API call
      // setTimeout(() => {
      //   this.loading = false;
      
      // }, 2000);
    }

  
}
